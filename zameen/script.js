// script.js



document.addEventListener("DOMContentLoaded", function() {
    const searchBtn = document.getElementById("searchBtn");
    const searchOptions = document.querySelectorAll(".search-options .btn-tertiary");

    // Handle search button click
    searchBtn.addEventListener("click", function() {
        const city = document.getElementById("city").value;
        const location = document.getElementById("location").value;
        alert(`Searching properties in ${city}, ${location}`);
    });

    // Handle search options click
    searchOptions.forEach(button => {
        button.addEventListener("click", function() {
            searchOptions.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Populate property listings (dummy data for example)
    const properties = {
        homes: [
            { title: "3 Marla House", description: "Beautiful house in city center", price: "2.5M" },
            { title: "5 Marla House", description: "Luxurious house with garden", price: "4.0M" }
        ],
        plots: [
            { title: "3 Marla Plot", description: "Plot in a prime location", price: "1.5M" },
            { title: "5 Marla Plot", description: "Plot with great potential", price: "2.0M" }
        ],
        commercial: [
            { title: "Shop in Market", description: "Shop in a busy market", price: "3.0M" },
            { title: "Office Space", description: "Office space in a commercial area", price: "5.0M" }
        ]
    };

    function populateProperties() {
        for (let category in properties) {
            const container = document.getElementById(category);
            properties[category].forEach(property => {
                const propertyDiv = document.createElement("div");
                propertyDiv.className = "property";
                propertyDiv.innerHTML = `
                    <h4>${property.title}</h4>
                    <p>${property.description}</p>
                    <p><strong>${property.price}</strong></p>
                `;
                container.appendChild(propertyDiv);
            });
        }
    }

    populateProperties();
});


        function selectCity(city) {
            document.getElementById('city').value = city;
        
            // Remove 'selected' class from all buttons
            let buttons = document.querySelectorAll('.dropdown-content button');
            buttons.forEach(button => button.classList.remove('selected'));
        
            // Add 'selected' class to the clicked button
            let clickedButton = Array.from(buttons).find(btn => btn.textContent === city);
            if (clickedButton) {
                clickedButton.classList.add('selected');
            }
        
            // Hide the dropdown
            document.querySelector('#dropdown-content').style.display = 'none';
        }
        
        // Toggle the dropdown on focus and close when clicking outside
        document.getElementById('city').addEventListener('click', function() {
            document.querySelector('.dropdown-content').style.display = 'block';
        });
        
        document.addEventListener('click', function(event) {
            let dropdown = document.querySelector('.dropdown');
            if (!dropdown.contains(event.target)) {
                document.querySelector('.dropdown-content').style.display = 'none';
            }
        });

        function showContent(contentId, categoryId, event) {
            const category = document.getElementById(categoryId);
            const tabs = category.getElementsByClassName('tab');
            const contents = category.getElementsByClassName('property-content');
        
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                contents[i].classList.remove('active');
            }
        
            document.getElementById(contentId).classList.add('active');
            event.currentTarget.classList.add('active');
        }
        
        
        function showTab(tabId) {
            // Hide all property type sections
            var propertyTypes = document.querySelectorAll('.property-ty');
            propertyTypes.forEach(function (type) {
                type.classList.remove('active');
            });
    
            // Remove active class from all tabs
            var tabs = document.querySelectorAll('.tab');
            tabs.forEach(function (tab) {
                tab.classList.remove('active');
            });
    
            // Show the selected property type section
            document.getElementById(tabId).classList.add('active');
    
            // Add active class to the selected tab
            event.target.classList.add('active');
        }
    
        function resetSelection() {
            // Reset the tabs and content to initial state
            showTab('homes');
        }
    
        function closeContainer() {
            // Hide the entire container
           // document.querySelector('.container').style.display = 'none';
        }      


        function showContent(contentId, categoryId) {
            const category = document.getElementById(categoryId);
            const tabs = category.getElementsByClassName('tab');
            const contents = category.getElementsByClassName('property-content');
        
            for (let i = 0; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                contents[i].classList.remove('active');
            }
        
            document.getElementById(contentId).classList.add('active');
            event.currentTarget.classList.add('active');
        }
        
        function moveSlide(direction, contentId) {
            const content = document.getElementById(contentId);
            const slider = content.querySelector('.slider-content');
            const slides = slider.children;
            const slideWidth = slides[0].offsetWidth;
            const totalSlides = slides.length;
            const currentTransform = parseInt(window.getComputedStyle(slider).transform.split(',')[4]) || 0;
        
            let newTransform = currentTransform + direction * slideWidth;
            if (newTransform < -((totalSlides - 1) * slideWidth)) newTransform = 0;
            if (newTransform > 0) newTransform = -((totalSlides - 1) * slideWidth);
        
            slider.style.transform = `translateX(${newTransform}px)`;
        
            // Update dot indicators
            const dots = content.querySelectorAll('.dot');
            dots.forEach(dot => dot.classList.remove('active'));
            const activeIndex = Math.abs(Math.round(newTransform / slideWidth));
            dots[activeIndex].classList.add('active');
        }
        
        function currentSlide(index, contentId) {
            const content = document.getElementById(contentId);
            const slider = content.querySelector('.slider-content');
            const slideWidth = slider.children[0].offsetWidth;
        
            slider.style.transform = `translateX(${-index * slideWidth}px)`;
        
            // Update dot indicators
            const dots = content.querySelectorAll('.dot');
            dots.forEach(dot => dot.classList.remove('active'));
            dots[index].classList.add('active');
        }  



       
        document.addEventListener('DOMContentLoaded', function() {
            const tabButtons = document.querySelectorAll('.tab-button');
            const tabContents = document.querySelectorAll('.tab-content');
            
            tabButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const tab = this.getAttribute('data-tab');
                    
                    tabButtons.forEach(btn => btn.classList.remove('active'));
                    tabContents.forEach(content => content.classList.remove('active'));
                    
                    this.classList.add('active');
                    document.getElementById(tab).classList.add('active');
                });
            });
        });

    
        function selectValue(field, value) {
            var inputField = document.getElementById(field);
            var buttonField = document.getElementById(field + '-btn');
        
            if (inputField && buttonField) {
                inputField.value = value;
                buttonField.textContent = value;
            } else {
                console.error('Element with id "' + field + '" or "' + field + '-btn" not found.');
            }
        }
        
        
        function selectCity(city) {
            document.getElementById('city').value = city;

            // Remove 'selected' class from all buttons
            let buttons = document.querySelectorAll('.city-dropdown .dropdown-content button');
            buttons.forEach(button => button.classList.remove('selected'));

            // Add 'selected' class to the clicked button
            let clickedButton = Array.from(buttons).find(btn => btn.textContent === city);
            if (clickedButton) {
                clickedButton.classList.add('selected');
            }

            // Hide the dropdown
            document.querySelector('.city-dropdown .dropdown-content').style.display = 'none';
        }

        // Toggle the dropdown on focus and close when clicking outside
        document.getElementById('city').addEventListener('click', function() {
            document.querySelector('.city-dropdown .dropdown-content').style.display = 'block';
        });

        document.addEventListener('click', function(event) {
            let dropdown = document.querySelector('.city-dropdown .dropdown');
            if (!dropdown.contains(event.target)) {
                document.querySelector('.city-dropdown .dropdown-content').style.display = 'none';
            }
        });
        function selectValue(field, value) {
            document.getElementById(field).value = value;
            document.getElementById(field + '-btn').textContent = value;
        }