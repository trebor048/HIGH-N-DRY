// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
// go away lol
$(document).ready(function () {
            // Initially hide all rows except the first 2
            $("#custom-table").slice(2).addClass("hidden-row");

            // Function to load more content when scrolling
            $(window).on("scroll", function () {
                if ($(window).scrollTop() + $(window).height() >= $(document).height() - 100) {
                    loadMoreContent();
                }
            });

            // Load initial set of rows
            loadMoreContent();

            // Function to load more content
            function loadMoreContent() {
                $("#custom-table.hidden-row").slice(0, 2).removeClass("hidden-row");
            }

            // Substance-color mapping object
            const substanceColors = {
                // danger (Strong Red)
                "Fentanyl:Positive": "#D32F2F",
                "Fentanyl: Positive": "#D32F2F",
                "para-Fluorofentanyl": "#D32F2F",
                "Para-Fluorofentanyl Base": "#D32F2F",
                "Ortho-Methylfentanyl": "#D32F2F",
                "Fentanyl Analogues": "#D32F2F",
                "Heroin": "#D32F2F",
                "Xylitol": "#D32F2F",
                "Fentanyl": "#D32F2F",
                // Stimulants (Vibrant Yellow)
                "4-Anilino-1-Boc-Piperidine": "#1e88e5",
                "4-Anilinopiperidine": "#1e88e5",
                "BZP": "#3498db",
                "t-Boc-Methamphetamine": "#5cacee",
                "Methamphetamine": "#87ceeb",
                "Cocaine": "#add8e6",
                "Amphetamine": "#b0e0e6",
                "Bath Salts": "#bfefff",

                // Sedatives (Deep Orange)
                "Benzodiazepine:Positive": "#D32F2F",
                "Benzodiazepine :Positive": "#D32F2F",
                "GHB": "#D32F2F",

                // Psychedelics (Deep Purple)
                "Phenethylamine": "#7E57C2",
                "MDMA": "#7E57C2",
                "MDA": "#7E57C2",
                "LSD": "#7E57C2",
                "Psilocybin": "#7E57C2",
                "2CB": "#7E57C2",
                "Ketamine": "#7E57C2",
                // Cannabinoids (Amber)
                "Synthetic Cannabinoids": "#FFD54F",

                // Cutting Agents / Neutral (Greyish Brown)
                "Caffeine": "#BCAAA4",
                "Mannitol": "#BCAAA4",
                "Acetaminophen": "#BCAAA4",
                "Phenacetin": "#BCAAA4",
                "Dimethyl Sulfoxide": "#BCAAA4",
                "Dimethyl-Sulfone": "#BCAAA4",
                "Erythritol": "#BCAAA4",
                "Calcium Stearate": "#BCAAA4",
                "Calcium Carbonate": "#BCAAA4",
                "Dicalcium Phosphate": "#BCAAA4",
                "Stearic Acid": "#BCAAA4",
                "Uncertain Oil": "#BCAAA4",
                "Uncertain Carbohydrate": "#BCAAA4",
                "Uncertain Mineral": "#BCAAA4",
                "Uncertain Match": "#BCAAA4",
                "Boric Acid": "#BCAAA4",
                "Inositol": "#BCAAA4",
                "Cellulose": "#BCAAA4",
                "Glucose": "#BCAAA4",
                "Sucrose": "#BCAAA4",
                "Microcrystalline Cellulose": "#BCAAA4",
            };

            // Function to highlight substances
            function highlightSubstances(elements) {
                elements.each(function () {
                    var element = $(this);
                    var substance = element.text().trim();
                    var color = substanceColors[substance];
                    if (color) {
                        element.css("background-color", color);
                    }
                });
            }

            // Highlight fentstrip elements
            // Select all elements with class "fentstrip"
            const elements = document.querySelectorAll('.fentstrip');

            // Iterate over each element
            elements.forEach(element => {
                // Check if the element contains the text "Positive"
                if (element.textContent.includes('Positive')) {
                    // Apply bright red background color
                    element.style.backgroundColor = '#D32F2F';
                }
            });

            // Highlight substance elements
            highlightSubstances($("td.substance"));

            // Function to handle missing images
            $("td.image").each(function () {
                var cell = $(this);
                if (cell.find("img").length === 0) {
                    cell.append("<div class='no-image'></div>");
                }
            });
        });
