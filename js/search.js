/**
 * Game Search & Live Filter for Parking Fury 3
 */
(function() {
    const ALL_GAMES = [{"title":"2 Player Dark Racing","img":"https://parkingfury3.github.io/gamefile-pakingfury3/2-player-dark-racing/logo.png","cat":"Car Games","slug":"2-player-dark-racing"},{"title":"3d Moto Simulator","img":"/img/3d-moto-simulator.jpg","cat":"Car Games","slug":"3d-moto-simulator"},{"title":"ATV Ultimate Offroad","img":"https://parkingfury3.github.io/gamefile-pakingfury3/atv-ultimate-offroad/logo.png","cat":"Car Games","slug":"atv-ultimate-offroad"},{"title":"Battle Arena Race To Win","img":"/img/battle-arena-race-to-win.jpg","cat":"Action Games","slug":"battle-arena-race-to-win"},{"title":"Boat Drift","img":"https://parkingfury3.github.io/gamefile-pakingfury3/boat-drift/logo.png","cat":"Car Games","slug":"boat-drift"},{"title":"Bomb It 4","img":"https://parkingfury3.github.io/gamefile-pakingfury3/bomb-it-4/logo.png","cat":"Puzzle Games","slug":"bomb-it-4"},{"title":"Bomb It 5","img":"https://parkingfury3.github.io/gamefile-pakingfury3/bomb-it-5/logo.png","cat":"Puzzle Games","slug":"bomb-it-5"},{"title":"Bomb It 6","img":"https://parkingfury3.github.io/gamefile-pakingfury3/bomb-it-6/logo.png","cat":"Puzzle Games","slug":"bomb-it-6"},{"title":"Bomb It 7","img":"https://parkingfury3.github.io/gamefile-pakingfury3/bomb-it-7/logo.png","cat":"Puzzle Games","slug":"bomb-it-7"},{"title":"Burnin\u0027 Rubber 5 XS","img":"https://parkingfury3.github.io/gamefile-pakingfury3/burnin-rubber-5-xs/logo.png","cat":"Car Games","slug":"burnin-rubber-5-xs"},{"title":"Burnout Drift Hilltop","img":"https://parkingfury3.github.io/gamefile-pakingfury3/burnout-drift-hilltop/logo.png","cat":"Car Games","slug":"burnout-drift-hilltop"},{"title":"Car Speed Racing Tycoon","img":"https://parkingfury3.github.io/gamefile-pakingfury3/car-speed-racing-tycoon/logo.png","cat":"Car Games","slug":"car-speed-racing-tycoon"},{"title":"Cars Merge","img":"/img/cars-merge.jpg","cat":"Car Games","slug":"cars-merge"},{"title":"City Drift Racing","img":"/img/city-drift-racing.jpg","cat":"Car Games","slug":"city-drift-racing"},{"title":"Construction Ramp Jumping","img":"https://parkingfury3.github.io/gamefile-pakingfury3/construction-ramp-jumping/logo.png","cat":"Car Games","slug":"construction-ramp-jumping"},{"title":"Crazy Cars","img":"https://parkingfury3.github.io/gamefile-pakingfury3/crazy-cars/logo.png","cat":"Car Games","slug":"crazy-cars"},{"title":"Crazy for Speed","img":"https://parkingfury3.github.io/gamefile-pakingfury3/crazy-for-speed/logo.png","cat":"Car Games","slug":"crazy-for-speed"},{"title":"Crazy Van","img":"/img/crazy-van.jpg","cat":"Car Games","slug":"crazy-van"},{"title":"Drift Escape","img":"https://parkingfury3.github.io/gamefile-pakingfury3/drift-escape/logo.png","cat":"Car Games","slug":"drift-escape"},{"title":"Drive Car Parking Simulation Game","img":"/img/drive-car-parking-simulation-game.jpg","cat":"Car Games","slug":"drive-car-parking-simulation-game"},{"title":"Drive Race Crash","img":"/img/drive-race-crash.jpg","cat":"Car Games","slug":"drive-race-crash"},{"title":"Fireboy and Watergirl 1: Forest Temple","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-and-watergirl-1-forest-temple/logo.png","cat":"Puzzle Games","slug":"fireboy-and-watergirl-1-forest-temple"},{"title":"Fireboy and Watergirl 2: Light Temple","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-water-2/logo.png","cat":"Puzzle Games","slug":"fireboy-water-2"},{"title":"Fireboy and Watergirl 3: Ice Temple","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-water-3/logo.png","cat":"Puzzle Games","slug":"fireboy-water-3"},{"title":"Fireboy and Watergirl 4: Crystal Temple","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-water-4/logo.png","cat":"Puzzle Games","slug":"fireboy-water-4"},{"title":"Fireboy and Watergirl 5: Elements","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-water-5/logo.png","cat":"Puzzle Games","slug":"fireboy-water-5"},{"title":"Fireboy and Watergirl 6: Fairy Tales","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-water-6/logo.png","cat":"Puzzle Games","slug":"fireboy-water-6"},{"title":"Fireboy and Watergirl 7: And Friends","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fireboy-and-watergirl-7-and-friends/logo.png","cat":"Puzzle Games","slug":"fireboy-and-watergirl-7-and-friends"},{"title":"Five Nights at Freddy\u0027s (FNAF 1)","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fnaf1/logo.png","cat":"Action Games","slug":"fnaf1"},{"title":"Five Nights at Freddy\u0027s 2 (FNAF 2)","img":"https://parkingfury3.github.io/gamefile-pakingfury3/fnaf2/logo.png","cat":"Action Games","slug":"fnaf2"},{"title":"Funny Mad Racing","img":"/img/funny-mad-racing.jpg","cat":"Car Games","slug":"funny-mad-racing"},{"title":"G-Switch","img":"https://parkingfury3.github.io/gamefile-pakingfury3/gswitch/logo.png","cat":"Action Games","slug":"gswitch"},{"title":"Gt Cars Mega Ramps","img":"/img/gt-cars-mega-ramps.jpg","cat":"Car Games","slug":"gt-cars-mega-ramps"},{"title":"Gunspin","img":"https://parkingfury3.github.io/gamefile-pakingfury3/gunspin/logo.png","cat":"Action Games","slug":"gunspin"},{"title":"Highway Racer 2","img":"https://parkingfury3.github.io/gamefile-pakingfury3/highway-racer-2/logo.png","cat":"Car Games","slug":"highway-racer-2"},{"title":"Hill Climb Pixel Car","img":"https://parkingfury3.github.io/gamefile-pakingfury3/hill-climb-pixel-car/logo.png","cat":"Car Games","slug":"hill-climb-pixel-car"},{"title":"Hill Climbing Mania","img":"/img/Hill Climbing Mania.jpeg","cat":"Car Games","slug":"hill-climbing-mania"},{"title":"Jump Into The Plane","img":"https://parkingfury3.github.io/gamefile-pakingfury3/jump-in-to-the-plane/logo.png","cat":"Car Games","slug":"jump-in-to-the-plane"},{"title":"Kart Race 3D","img":"https://parkingfury3.github.io/gamefile-pakingfury3/kart-race-3d/logo.png","cat":"Car Games","slug":"kart-race-3d"},{"title":"Mega Ramp Bike Racing Tracks","img":"/img/mega-ramp-bike-racing-tracks.jpg","cat":"Car Games","slug":"mega-ramp-bike-racing-tracks"},{"title":"Mega Ramps Ultimate Car Races","img":"/img/mega-ramps-ultimate-car-races.jpg","cat":"Car Games","slug":"mega-ramps-ultimate-car-races"},{"title":"Merge Battle Car","img":"https://parkingfury3.github.io/gamefile-pakingfury3/merge-battle-car/logo.png","cat":"Puzzle Games","slug":"merge-battle-car"},{"title":"Moto Road Rash 3d 2","img":"/img/moto-road-rash-3d-2.jpg","cat":"Car Games","slug":"moto-road-rash-3d-2"},{"title":"Motor Tour","img":"/img/motor-tour.jpeg","cat":"Car Games","slug":"motor-tour"},{"title":"Mr Racer Car Racing","img":"/img/mr-racer-car-racing.jpg","cat":"Car Games","slug":"mr-racer-car-racing"},{"title":"Night City Racing","img":"https://parkingfury3.github.io/gamefile-pakingfury3/night-city-racing/logo.png","cat":"Car Games","slug":"night-city-racing"},{"title":"Nitro Speed Car Racing","img":"/img/nitro-speed-car-racing.jpg","cat":"Car Games","slug":"nitro-speed-car-racing"},{"title":"Offroad Moto Mania","img":"/img/offroad-moto-mania.jpg","cat":"Car Games","slug":"offroad-moto-mania"},{"title":"Offroad Muddy Trucks","img":"/img/offroad-muddy-trucks.jpg","cat":"Car Games","slug":"offroad-muddy-trucks"},{"title":"Parking Fury","img":"/img/parking-fury1.png","cat":"Car Games","slug":"parking-fury"},{"title":"Parking Fury 2","img":"/img/parking-fury-2.png","cat":"Car Games","slug":"parking-fury-2"},{"title":"Parking Fury 3","img":"/img/parking-fury-3.jpeg","cat":"Car Games","slug":"parking-fury-3"},{"title":"Parking Fury 3d","img":"/img/parking-fury-3d1.png","cat":"Car Games","slug":"parking-fury-3d"},{"title":"Parking Fury 3d Beach City 2","img":"/img/parking-fury-3d-beach-city-2.png","cat":"Car Games","slug":"parking-fury-3d-beach-city-2"},{"title":"Parking Fury 3d Bounty Hunter","img":"/img/parking-fury-3d-bounty-hunter.png","cat":"Car Games","slug":"parking-fury-3d-bounty-hunter"},{"title":"Parking Fury 3d Night Thief","img":"/img/parking-fury-3d-night-thief.png","cat":"Car Games","slug":"parking-fury-3d-night-thief"},{"title":"Parking Master Urban Challenges","img":"/img/parking-master-urban-challenges.jpg","cat":"Car Games","slug":"parking-master-urban-challenges"},{"title":"Pursuit Rampage","img":"/img/pursuit-rampage.jpg","cat":"Action Games","slug":"pursuit-rampage"},{"title":"Rally Racer Dirt","img":"https://parkingfury3.github.io/gamefile-pakingfury3/rally-racer-dirt/logo.png","cat":"Car Games","slug":"rally-racer-dirt"},{"title":"Real Cars Epic Stunts","img":"/img/real-cars-epic-stunts.jpg","cat":"Car Games","slug":"real-cars-epic-stunts"},{"title":"Real Racing 3d","img":"/img/real-racing-3d.jpg","cat":"Car Games","slug":"real-racing-3d"},{"title":"Snail Bob 1","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-1-html5/logo.png","cat":"Puzzle Games","slug":"snail-bob-1-html5"},{"title":"Snail Bob 2","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-2-html5/logo.png","cat":"Puzzle Games","slug":"snail-bob-2-html5"},{"title":"Snail Bob 3","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-3/logo.png","cat":"Puzzle Games","slug":"snail-bob-3"},{"title":"Snail Bob 4: Space","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-4/logo.png","cat":"Puzzle Games","slug":"snail-bob-4"},{"title":"Snail Bob 5: Love Story","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-5-html5/logo.png","cat":"Puzzle Games","slug":"snail-bob-5-html5"},{"title":"Snail Bob 6: Winter Story","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-6/logo.png","cat":"Puzzle Games","slug":"snail-bob-6"},{"title":"Snail Bob 7: Fantasy Story","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-7/logo.png","cat":"Puzzle Games","slug":"snail-bob-7"},{"title":"Snail Bob 8: Island Story","img":"https://parkingfury3.github.io/gamefile-pakingfury3/snail-bob-8/logo.png","cat":"Puzzle Games","slug":"snail-bob-8"},{"title":"Stunt Bike Rider Bros","img":"/img/stunt-bike-rider-bros.jpg","cat":"Car Games","slug":"stunt-bike-rider-bros"},{"title":"Super Hero Driving School","img":"/img/super-hero-driving-school.jpg","cat":"Car Games","slug":"super-hero-driving-school"},{"title":"Syder Hyper Drive","img":"/img/syder-hyper-drive.jpg","cat":"Car Games","slug":"syder-hyper-drive"},{"title":"Traffic Jam 3D","img":"https://parkingfury3.github.io/gamefile-pakingfury3/traffic-jam-3d-gh-pages/logo.png","cat":"Car Games","slug":"traffic-jam-3d-gh-pages"},{"title":"Traffic Mania","img":"https://parkingfury3.github.io/gamefile-pakingfury3/traffic-mania/logo.png","cat":"Car Games","slug":"traffic-mania"},{"title":"Trial Xtreme","img":"/img/trial-xtreme.jpg","cat":"Car Games","slug":"trial-xtreme"},{"title":"Tunnel Rush","img":"https://parkingfury3.github.io/gamefile-pakingfury3/tunnel-rush/logo.png","cat":"Action Games","slug":"tunnel-rush"},{"title":"Turbo Race 3d","img":"/img/turbo-race-3d.jpg","cat":"Car Games","slug":"turbo-race-3d"},{"title":"Vex 3","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex3/logo.png","cat":"Action Games","slug":"vex3"},{"title":"Vex 4","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex4/logo.png","cat":"Action Games","slug":"vex4"},{"title":"Vex 5","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex5/logo.png","cat":"Action Games","slug":"vex5"},{"title":"Vex 6","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex6/logo.png","cat":"Action Games","slug":"vex6"},{"title":"Vex 7","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex7/logo.png","cat":"Action Games","slug":"vex7"},{"title":"Vex 8","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex-8/logo.png","cat":"Action Games","slug":"vex-8"},{"title":"Vex 9","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex-9/logo.png","cat":"Action Games","slug":"vex-9"},{"title":"Vex Hyper Dash","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex-hyper-dash/logo.png","cat":"Action Games","slug":"vex-hyper-dash"},{"title":"Vex Try To Fly","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex-try-to-fly/logo.png","cat":"Action Games","slug":"vex-try-to-fly"},{"title":"Vex X3m","img":"/img/vex-x3m.jpg","cat":"Action Games","slug":"vex-x3m"},{"title":"Vex X3M 2","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex-x3m-2/logo.png","cat":"Action Games","slug":"vex-x3m-2"},{"title":"Vex X3M 3","img":"https://parkingfury3.github.io/gamefile-pakingfury3/vex-x3m-3/logo.png","cat":"Action Games","slug":"vex-x3m-3"}];

    function initSearch() {
        const containers = document.querySelectorAll('.search-container');
        if (!containers.length) return;

        // Ensure global backdrop overlay exists on body
        let backdrop = document.querySelector('.search-backdrop');
        if (!backdrop) {
            backdrop = document.createElement('div');
            backdrop.className = 'search-backdrop';
            document.body.appendChild(backdrop);
        }

        function showBackdrop() {
            if (backdrop) backdrop.classList.add('active');
        }

        function hideBackdrop() {
            if (backdrop) backdrop.classList.remove('active');
        }

        containers.forEach(container => {
            const input = container.querySelector('.search-box');
            const searchBtn = container.querySelector('.search-btn');
            if (!input) return;

            // Ensure clear button exists
            let clearBtn = container.querySelector('.search-clear-btn');
            if (!clearBtn) {
                clearBtn = document.createElement('button');
                clearBtn.className = 'search-clear-btn';
                clearBtn.type = 'button';
                clearBtn.innerHTML = '&#10005;';
                clearBtn.title = 'Clear search';
                if (searchBtn) {
                    container.insertBefore(clearBtn, searchBtn);
                } else {
                    container.appendChild(clearBtn);
                }
            }

            // Ensure dropdown element exists
            let dropdown = container.querySelector('.search-results-dropdown');
            if (!dropdown) {
                dropdown = document.createElement('div');
                dropdown.className = 'search-results-dropdown';
                container.appendChild(dropdown);
            }

            let selectedIndex = -1;

            function scrollToResults() {
                const target = document.querySelector('.games-section') || document.querySelector('.games-grid');
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    dropdown.style.display = 'none';
                    hideBackdrop();
                }
            }

            function filterPageCards(query) {
                const gameCards = document.querySelectorAll('.games-grid .game-card');
                if (!gameCards.length) return;

                if (query) {
                    document.body.classList.add('is-searching');
                } else {
                    document.body.classList.remove('is-searching');
                }

                let totalMatches = 0;
                gameCards.forEach(card => {
                    const titleEl = card.querySelector('.game-title, .game-card-title');
                    const text = titleEl ? titleEl.textContent.toLowerCase() : '';
                    if (!query || text.includes(query)) {
                        card.style.display = '';
                        totalMatches++;
                    } else {
                        card.style.display = 'none';
                    }
                });

                // Update no-results placeholder in each games section
                document.querySelectorAll('.games-section').forEach(section => {
                    const grid = section.querySelector('.games-grid');
                    if (!grid) return;
                    const cards = grid.querySelectorAll('.game-card');
                    const visible = Array.from(cards).filter(c => c.style.display !== 'none');
                    let noMsg = section.querySelector('.no-results-msg');

                    if (visible.length === 0 && query) {
                        if (!noMsg) {
                            noMsg = document.createElement('div');
                            noMsg.className = 'no-results-msg';
                            section.appendChild(noMsg);
                        }
                        noMsg.innerHTML = '&#128269; No games found matching "<strong>' + escapeHtml(query) + '</strong>"';
                        noMsg.style.display = 'block';
                    } else if (noMsg) {
                        noMsg.style.display = 'none';
                    }
                });
            }

            function updateDropdown(query) {
                selectedIndex = -1;
                if (!query) {
                    dropdown.style.display = 'none';
                    dropdown.innerHTML = '';
                    hideBackdrop();
                    return;
                }

                const matches = ALL_GAMES.filter(function(g) {
                    return g.title.toLowerCase().includes(query);
                }).slice(0, 10);

                if (matches.length > 0) {
                    const hasGrid = document.querySelector('.games-grid');
                    let html = '<div class="search-results-header">' +
                        '<span>&#127918; FOUND ' + matches.length + ' GAME' + (matches.length > 1 ? 'S' : '') + '</span>' +
                        '<span style="color: rgba(255,255,255,0.6); font-size: 11px;">Press Enter to view</span>' +
                    '</div>';

                    html += matches.map(function(g, idx) {
                        return '<a href="/game/' + g.slug + '.html" class="search-result-item" data-index="' + idx + '">' +
                            '<img src="' + g.img + '" onerror="this.onerror=null; this.src=\'/img/parking-fury-3.jpeg\';" alt="' + escapeHtml(g.title) + '" class="search-result-thumb">' +
                            '<div class="search-result-info">' +
                                '<span class="search-result-title">' + highlightText(g.title, query) + '</span>' +
                                '<span class="search-result-cat">&#127991; ' + g.cat + '</span>' +
                            '</div>' +
                            '<span class="search-result-play">PLAY &#127918;</span>' +
                        '</a>';
                    }).join('');

                    if (hasGrid) {
                        html += '<div class="search-results-footer" id="search-scroll-trigger">&#128071; View all matching games on page</div>';
                    }

                    dropdown.innerHTML = html;
                    dropdown.style.display = 'block';
                    showBackdrop();

                    const footer = dropdown.querySelector('#search-scroll-trigger');
                    if (footer) {
                        footer.addEventListener('click', function(e) {
                            e.preventDefault();
                            e.stopPropagation();
                            scrollToResults();
                        });
                    }
                } else {
                    dropdown.innerHTML = '<div class="search-no-results">&#128269; No games found for "<strong>' + escapeHtml(query) + '</strong>"</div>';
                    dropdown.style.display = 'block';
                    showBackdrop();
                }
            }

            function onSearchChange() {
                const query = input.value.trim().toLowerCase();
                clearBtn.style.display = query ? 'inline-block' : 'none';
                filterPageCards(query);
                updateDropdown(query);
            }

            input.addEventListener('input', onSearchChange);

            input.addEventListener('focus', function() {
                const query = input.value.trim().toLowerCase();
                if (query) {
                    updateDropdown(query);
                }
            });

            // Handle keyboard navigation
            input.addEventListener('keydown', function(e) {
                const items = dropdown.querySelectorAll('.search-result-item');
                if (e.key === 'Escape') {
                    dropdown.style.display = 'none';
                    hideBackdrop();
                    input.blur();
                    return;
                }

                if (e.key === 'ArrowDown') {
                    if (items.length && dropdown.style.display !== 'none') {
                        e.preventDefault();
                        selectedIndex = (selectedIndex + 1) % items.length;
                        highlightItem(items, selectedIndex);
                    }
                    return;
                }

                if (e.key === 'ArrowUp') {
                    if (items.length && dropdown.style.display !== 'none') {
                        e.preventDefault();
                        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
                        highlightItem(items, selectedIndex);
                    }
                    return;
                }

                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (selectedIndex >= 0 && items[selectedIndex]) {
                        items[selectedIndex].click();
                    } else if (document.querySelector('.games-section')) {
                        scrollToResults();
                    } else if (items.length && items[0]) {
                        items[0].click();
                    } else {
                        const query = input.value.trim().toLowerCase();
                        const firstMatch = ALL_GAMES.find(g => g.title.toLowerCase().includes(query));
                        if (firstMatch) {
                            window.location.href = '/game/' + firstMatch.slug + '.html';
                        }
                    }
                }
            });

            // Clear button
            clearBtn.addEventListener('click', function() {
                input.value = '';
                clearBtn.style.display = 'none';
                filterPageCards('');
                dropdown.style.display = 'none';
                hideBackdrop();
                input.focus();
            });

            // Search button click
            if (searchBtn) {
                searchBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const query = input.value.trim().toLowerCase();
                    if (!query) {
                        input.focus();
                        return;
                    }
                    if (selectedIndex >= 0) {
                        const items = dropdown.querySelectorAll('.search-result-item');
                        if (items[selectedIndex]) {
                            items[selectedIndex].click();
                            return;
                        }
                    }
                    if (document.querySelector('.games-section')) {
                        scrollToResults();
                    } else {
                        const items = dropdown.querySelectorAll('.search-result-item');
                        if (items.length && items[0]) {
                            items[0].click();
                        } else {
                            const firstMatch = ALL_GAMES.find(g => g.title.toLowerCase().includes(query));
                            if (firstMatch) {
                                window.location.href = '/game/' + firstMatch.slug + '.html';
                            }
                        }
                    }
                });
            }

            // Close dropdown and backdrop when clicking outside
            document.addEventListener('click', function(e) {
                if (!container.contains(e.target) && e.target !== backdrop) {
                    dropdown.style.display = 'none';
                    hideBackdrop();
                }
            });

            if (backdrop) {
                backdrop.addEventListener('click', function() {
                    dropdown.style.display = 'none';
                    hideBackdrop();
                });
            }
        });
    }

    function highlightItem(items, index) {
        items.forEach((item, i) => {
            if (i === index) {
                item.classList.add('selected');
                item.scrollIntoView({ block: 'nearest' });
            } else {
                item.classList.remove('selected');
            }
        });
    }

    function escapeHtml(str) {
        return str.replace(/[&<>'"]/g, tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag));
    }

    function highlightText(text, query) {
        if (!query) return escapeHtml(text);
        const idx = text.toLowerCase().indexOf(query.toLowerCase());
        if (idx === -1) return escapeHtml(text);
        const before = text.substring(0, idx);
        const match = text.substring(idx, idx + query.length);
        const after = text.substring(idx + query.length);
        return escapeHtml(before) + '<mark>' + escapeHtml(match) + '</mark>' + escapeHtml(after);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initSearch);
    } else {
        initSearch();
    }
})();