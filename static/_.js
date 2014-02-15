(function(window, undefined) {
    // colors based on GitHub
    var language_info = {
        python: {
            name: 'Python',
            color: '#3581ba'
        },
        php: {
            name: 'PHP',
            color: '#6e03c1'
        },
        coffee: {
            name: 'CoffeeScript',
            color: '#244776'
        },
        javascript: {
            name: 'JavaScript',
            color: '#f15501'
        },
        matlab: {
            name: 'Matlab',
            color: '#bb92ac'
        },
        css: {
            name: 'CSS', // actually for Delphi
            color: '#b0ce4e'
        }
    };

    window.addEventListener('load', function() {
        // add visualized language information
        var slice = Array.prototype.slice;
        var projects = slice.call(document.querySelectorAll('.projects tbody tr'), 0);

        projects.forEach(function(project) {
            project.dataset.languages.split(' ').forEach(function(lang) {
                var span = document.createElement('span');
                span.className = 'badge';
                span.title = span.textContent = language_info[lang].name;
                span.style.backgroundColor = language_info[lang].color;

                project.lastChild.insertBefore(span, null);
            });
        });

        // show the content, there would be a delay resulted from css transition
        document.querySelector('#container').style.opacity = 1;
    });
})(this);
