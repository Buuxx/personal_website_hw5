import { getProjectCardCSS } from "./project_card_css.js";

class ProjectCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <div id="projectcard">
                <hgroup id="background-hgroup">
                    <h2>${this.getAttribute('h2')}</h2>
                    <p id='background-description'>${this.getAttribute('description')}</p>
                    <aside>
                        <p class='supplemental'>${this.getAttribute('date')}</p>
                        <a class='supplemental' href='${this.getAttribute('href')}'>More Info</a>
                    </aside>
                </hgroup>
                <picture>
                    <img 
                        src='${this.getAttribute('picture-src')}' 
                        alt='${this.getAttribute('picture-alt')}'/>
                </picture>
            </div>
        `;

        const style = document.createElement('style');
        style.textContent = getProjectCardCSS();
        this.shadowRoot.appendChild(style);
        
        const block = this.shadowRoot.getElementById("projectcard");
        const image = this.shadowRoot.querySelector("img")
        const hgroup = this.shadowRoot.getElementById("background-hgroup");

        block.style.width = this.getAttribute('width');
        block.style.height = this.getAttribute('height');
        image.style.width = this.getAttribute('width');
        image.style.height = this.getAttribute('height');
        block.style.width = this.getAttribute('width');
        block.style.height = this.getAttribute('height');
        hgroup.style.width = this.getAttribute('width');
        hgroup.style.height = this.getAttribute('height');
        if (this.hasAttribute("text")) {
            hgroup.style.display = "flex";
            image.style.display = "none";  
            hgroup.style.backgroundImage = `url(${this.getAttribute('picture-src')})`;
            hgroup.style.backgroundColor = "rgba(18, 18, 18, 0.95)";
        } else {
            hgroup.style.display = "none";
            image.style.display = "block";
        };

        this.shadowRoot.getElementById("projectcard").addEventListener("click", () => {
            hgroup.style.display = hgroup.style.display === "none" ? "flex" : "none";
            image.style.display = image.style.display === "block" ? "none" : "block";
            hgroup.style.backgroundImage = hgroup.style.display === "none" ? "" : `url(${this.getAttribute('picture-src')})`;
            hgroup.style.backgroundColor = hgroup.style.display === "none" ? "" : "rgba(18, 18, 18, 0.95)";
        });
    }
}

customElements.define("project-card", ProjectCard)