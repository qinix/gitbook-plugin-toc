var toc = require('markdown-toc');

module.exports = {
	book: {
    assets: './assets',
    css: ['plugin.css']
  },
	hooks: {
		"page:before": function (page) {
			page.content = toc.insert(page.content, {
				slugify: function (str) {
					return encodeURI(str.toLowerCase()).replace(/%20/g, '-');
				}
			});

			return page;
		},
    "page": function (page) {
      page.content = page.content.replace('<!-- toc -->', '<!-- toc --><div id="toc" class="toc">\n');
      page.content = page.content.replace('<!-- tocstop -->', '\n</div><!-- tocstop -->');
      return page;
    }
	}
};
