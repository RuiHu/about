(function(window, undefined) {
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
        }
    }

    show_content = function() {
    }

    window.addEventListener('load', function() {
        // add visualized language information
        var slice = Array.prototype.slice
        var projects = slice.call(document.querySelectorAll('.projects li'), 0)

        projects.forEach(function(project) {
            project.dataset.languages.split(' ').forEach(function(lang) {
                var i = document.createElement('i')
                i.className = 'fa fa-square'
                i.title = language_info[lang].name
                i.style.color = language_info[lang].color

                project.insertBefore(i, null)
            })
        })

        // show the content, there would be a delay resulted from css transition
        document.querySelector('#container').style.opacity = 1
    })
})(this)
