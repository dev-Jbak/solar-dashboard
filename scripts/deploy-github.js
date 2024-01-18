var ghpages = require('gh-pages');

// ghpages.publish('.output/public', {
//     repo: 'https://github.com/dev-Jbak/countdown.git'
// });

ghpages.publish('.output/public', {
    dotfiles: true,
    repo: 'https://github.com/dev-Jbak/solar.git'
});