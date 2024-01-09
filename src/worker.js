export default {

  async fetch(request) {

    class ElementHandler {
      element(element) {
        const fact = getFact();
        element.append(`<div>${fact}</div>`, {html: true});
      }
    }

    const res = await fetch(request);
    return new HTMLRewriter().on('section#title', new ElementHandler()).transform(res);


    async function getFact() {
      const response = await fetch(`https://catfact.ninja/fact`);
      try {
        const result = await response.json();
        return result.fact;
      } catch (err) {
        return err;
      }
    }
  }
}