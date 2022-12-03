import './nunjucks.min.js';

const env = nunjucks.configure({autoescape: true, web: {async: true}});

/*
With custom loader
const MyLoader = nunjucks.Loader.extend({
	async: true,
	getSource: function(path, cb) {
		fetch(path) //  `/templates/${path}.njk`
			.then(res => res.text())
			.then(src => cb(null, {src, path, noCache: false}))
			.catch(cb);
	}
});
const env = new nunjucks.Environment(new MyLoader(), {autoescape: true});
*/

// Demo async extension to load remote data by url into variable
// {% get varname = "url" %}
function GetExtension(cb) {
	this.tags = ['get'];

	this.parse = function(parser, nodes, lexer) {
		const tok = parser.nextToken();
		const args = parser.parseSignature(null, true);
		parser.advanceAfterBlockEnd(tok.value);

		return new nodes.CallExtensionAsync(this, 'run', args, cb);
	};

	this.run = function(context, args, cb) {
		const ref = args instanceof Object && Object.keys(args).filter(e => e != '__keywords')[0];
		const url = encodeURI(args[ref]);
		const headers =  {pragma: 'no-cache', 'cache-control': 'no-cache'}

		fetch(url, {headers})
			.then(res => res.json())
			.then(function (res) {
				if (res.error)
					console.error(url, res.error);

				context.ctx[ref] = res.error ? undefined : res;
				cb && cb();
			})
			.catch(cb);
	};
}

env.addExtension('GetExtension', new GetExtension());

// Like include-tag but async and passing args
// {{ 'another-template.njk' | render({abc: 10}) }}
// Don't use in macro because it's async
env.addFilter('render', function (template, ctx, cb) {
	env.render(template, ctx, (err, html) => cb && cb(err, !err ? env.filters.safe(html) : undefined))
}, true); // <--

// Add another filters and global for demo
env.addFilter('print', console.log);
env.addFilter('time', datetime => new Date(+datetime).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}));
env.addGlobal('now', () => Date.now());

export default env;
