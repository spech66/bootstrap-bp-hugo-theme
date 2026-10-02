/* Minimal replacement for bootstrap.bundle.js: navbar collapse and dropdowns.
   Works with the regular Bootstrap markup (data-bs-toggle="collapse" / "dropdown").
   Set params.bootstrapJS = true to load the full Bootstrap bundle instead. */
(function () {
    function closeDropdowns(except) {
        document.querySelectorAll('[data-bs-toggle="dropdown"][aria-expanded="true"]').forEach(function (t) {
            if (t === except) return;
            t.setAttribute('aria-expanded', 'false');
            var m = t.parentElement.querySelector('.dropdown-menu');
            if (m) m.classList.remove('show');
        });
    }

    document.addEventListener('click', function (e) {
        var t = e.target.closest('[data-bs-toggle]');
        if (!t) {
            closeDropdowns();
            return;
        }
        var type = t.getAttribute('data-bs-toggle');
        if (type === 'collapse') {
            var target = document.querySelector(t.getAttribute('data-bs-target') || t.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            var open = target.classList.toggle('show');
            t.classList.toggle('collapsed', !open);
            t.setAttribute('aria-expanded', open ? 'true' : 'false');
        } else if (type === 'dropdown') {
            var menu = t.parentElement.querySelector('.dropdown-menu');
            if (!menu) return;
            e.preventDefault();
            closeDropdowns(t);
            var shown = menu.classList.toggle('show');
            t.classList.toggle('show', shown);
            t.setAttribute('aria-expanded', shown ? 'true' : 'false');
        }
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeDropdowns();
    });
})();
