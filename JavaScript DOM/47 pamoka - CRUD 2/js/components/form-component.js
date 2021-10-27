class FormComponent{
  constructor(props){
    this.props = props;
    this.htmlElement = document.createElement('form');
    this.render();
  }

  render = () =>{
    this.htmlElement.className = 'shadow p-3 my-3';
    this.htmlElement.innerHTML = `
    <h2>Formos pavadinimas</h2>

    <div class="mb-3">
      <label for="username" class="form-label">Vartotojas</label>
      <input type="text" class="form-control" id="username" name="username">
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">El. paštas</label>
      <input type="email" class="form-control" id="email" name="email">
    </div>
    <div class="mb-3">
      <label for="imgSrc" class="form-label">Nuotraukos nuoroda</label>
      <input type="text" class="form-control" id="imgSrc" name="imgSrc">
    </div>

    <div class="text-center">
      <button class="btn btn-success">Išsaugoti duomenis</button>
    </div>`;
  }
}