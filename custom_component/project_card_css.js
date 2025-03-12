export function getProjectCardCSS() {
    return `
        * {
            margin: 0;
            border: 0;
        }

        #background-hgroup {
            color: #f5dee8;
            display: none;
            justify-content: space-between;
            flex-direction: column;
            background-blend-mode: overlay;
            background-size: cover;

            h2 {
                display: flex;
                justify-content: flex-start;
                font-family: "ivymode-1", serif;
                padding: 1.2rem 1.5rem 0 1.5rem;
            }

            p, a {
                font-family: "IBM Plex Sans", serif, monospace;
            }
            
            #background-description {
                margin: auto;
                font-weight: 200;
                padding: 0 3.5rem;
            }
            
            aside {
                display: flex;
                justify-content: space-between;
                padding: 0 1.5rem 1.2rem 1.5rem;
                font-size: 0.8rem;
                font-weight: 100;
            
                a {
                    text-decoration: none;
                }

                a:visited {
                    color: #d099af;
                    text-decoration: none;
                }

                a:link {
                    text-decoration: underline dotted;
                    color: #f5dee8;
                }

                a:hover {
                    font-weight: 500;
                }
            }
        }
        
        
        #projectcard {
            display: block;
            overflow: hidden;
        }
        
        img {
            object-fit: cover;
            transition: all 2s ease-in-out;
            transition-delay: 0.3s;
        }
        
        img:hover {
            transform: scale(1.1);
        }
    `;
}