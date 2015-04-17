var templates = [
    "root/externallib/text!root/plugins/feedback/theme.css",
    "root/externallib/text!root/plugins/feedback/feedback.html"
];

define(templates, function(theme, feedbackForm) {
    var plugin = {
        settings: {
            name: "feedback",
            type: "general",
            menuURL: "#feedback",
            icon: "plugins/events/icon.png",
            lang: {
                component: "core"
            }
        },
        routes: [
            ["feedback", "feedback_form", "loadFeedback"]
        ],
        loadFeedback: function() {
            var tpl = {
                user: {
                    fullname: MM.site.get('fullname'),
                    profileimageurl: MM.site.get('userpictureurl')
                },
                siteurl: MM.site.get('siteurl')
            };
            var html = MM.tpl.render(feedbackForm, tpl);
            MM.panels.show('center', html, {title: MM.lang.s("feedbackHeader")});
        }
    };

    // Inject allways our custom theme.
   // $("#mobilecssurl").html(theme);
    MM.registerPlugin(plugin);

});