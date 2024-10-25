class MyButton extends HTMLElement {
    constructor() {
      super();
      
      // Attach a shadow DOM to the component
      this.attachShadow({ mode: 'open' });
  
      // Create a button element
      const button = document.createElement('button');
      button.textContent = 'Click me';
  
      // Style the button
      const style = document.createElement('style');
      style.textContent = `
        button {
          background-color: #6200ea;
          color: white;
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        button:hover {
          background-color: #3700b3;
        }
      `;
  
      // Append style and button to the shadow DOM
      this.shadowRoot.append(style, button);
  
      // Add a click event listener
      button.addEventListener('click', () => {
        this.handleClick();
      });
    }
  
    // Define the click event handler
    handleClick() {
      console.log('Button clicked!');
      // Dispatch a custom event to notify outside listeners
      this.dispatchEvent(new CustomEvent('button-clicked', {
        detail: { message: 'The button was clicked!' },
        bubbles: true,
        composed: true,
      }));
    }
  }
  
  // Register the custom element
  customElements.define('my-button', MyButton);
  