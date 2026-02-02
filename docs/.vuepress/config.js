module.exports = {
    base: '/',
    port: '8080',
    cache: false,
    title: 'AlamiaConnect User Documentation',
    description: 'Discover AlamiaConnect – your ultimate destination for innovative solutions tailored to elevate your business. Explore cutting-edge technology and expert strategies designed to drive growth and success. Unleash your potential with AlamiaConnect today',
    head: [
        ['link', { rel: "icon", type: "image/png", href: "/favicon.png" }],

        ['script', {}, `
            (function() {
                var script = document.createElement('script');
                script.innerHTML = 'window.chatbotConfig = { url: "https://ask.alamiaconnect.com:5001/chat", logoUrl: "https://docs.alamiaconnect.com/logoBot.png" };';
                document.head.appendChild(script);
            })();
        `],
        ['script', { src: 'https://vikastiwari-AlamiaSoft.github.io/ai-chatbot/chatbot.js', async: true }]
    ],
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        repo: 'AlamiaSoft/AlamiaConnect-UserGuide',
        repoLabel: 'Contribute to AlamiaConnect',
        docsRepo: 'AlamiaSoft/AlamiaConnect-UserGuide',
        docsDir: 'docs',
        docsBranch: 'master',
        editLinks: true,
        editLinkText: 'Help us improve this page on Github.',
        logo: '/logo.png',
        nav: [
            { text: 'Dev Docs', link: 'https://devdocs.alamiaconnect.com/' },
            { text: 'Community Forum', link: 'https://forums.alamiaconnect.com/' },
            { text: 'Contact Us ', link: 'https://alamiaconnect.com/contacts/' }
        ],
        sidebar: {
            '/2.x/': require('./version-configs/2.x')
        }
    },
    markdown: {
        lineNumbers: false
    },
    plugins: ['@vuepress/pwa', 'copy-code', '@vuepress/back-to-top']
};
