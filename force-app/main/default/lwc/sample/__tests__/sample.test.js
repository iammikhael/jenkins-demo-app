import { createElement } from 'lwc';
import Sample from 'c/sample';
  
describe('c-unit-test', () => {
  afterEach(() => {
    // The jsdom instance is shared across test cases in a single file so reset the DOM
    while(document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
    jest.clearAllMocks();
  });

  it('clicks the Button', () => {
    const mockCallBack = jest.fn();
    const element = createElement('c-unit-test', {
        is: Sample
    });
    element.addEventListener('click', mockCallBack);
    document.body.appendChild(element);

    // Simulate button click
    const buttonEl = element.shadowRoot.querySelector('lightning-button');
    buttonEl.click();

    expect(mockCallBack).toHaveBeenCalled();
    return Promise.resolve().then(() => {
        const displayString = element.shadowRoot.querySelector('p');
        expect(displayString.textContent).toBe('Button clicked @ '+ (new Date()).toTimeString());
      });
  });
});