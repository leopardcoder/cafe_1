let idBasis = 88;
const generateId = () => {
  return String(idBasis++);
}

// Jeigu programos daliai reikalinga tam tikra duomenų struktūra ar formatas, tuomet reikėtų sukurti funkciją,
// duomenims performuoti, ir tai programos daliai perduoti tos funkcijos rezultatą(performuotus duomenis). 

// props - (kitų elementų)/(programos dalių) perduotos savybės/duomenys
// state - komponeneto būsena, kuri keičiama pačio komponeneto, arba jo vaikų
class UserManagerComponent {
  constructor() {
    this.state = {
      users: userDataArr,
      tableProps: {
        headers: ['Nuotrauka', 'Vartotojas', 'Paštas'],
        onEdit: this.editUser
      },
      formProps: {
        btnText: 'Sukurti',
        btnClass: 'btn-success',
        borderClass: 'border-success',
        title: 'Sukurti vartotoją',
        fields: [{
          label: 'Vartotojas',
          type: 'text',
          name: 'username',
        }, {
          label: 'El. paštas',
          type: 'email',
          name: 'email',
        }, {
          label: 'Nuotraukos nuoroda',
          type: 'text',
          name: 'imgSrc',
        }],
        onSubmit: this.createUser
      }
    };
    this.intialize();
  }

  formatTableData = () => this.state.users.reduce((prevRowsArr, { imgSrc, username, email, id }) => [
    ...prevRowsArr,
    {
      id,
      rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
    }
  ], []);

  createUser = ({ username, email, imgSrc }) => {
    this.state.tableProps.data = [
      ...this.state.tableProps.data,
      {
        id: generateId(),
        rowData: [`<img src="${imgSrc}" class="table__row-img"/>`, username, email]
      }
    ];
    this.table.updateProps({
      data: this.state.tableProps.data
    })
  }

  editUser = (id) => {
    const { id: _, ...userData } = this.state.users.find(x => x.id === id);
    console.log(userData);

    //                [
    //                 { name: 'username', value: '...' },
    // userData ->     { name: 'email', value: '...' },           -> this.form.updateProps({... fields: ....})
    //                 { name: 'imgSrc', value: '...' },
    //               ]

    this.form.updateProps({
      title: 'Atnaujinti Vartotoją',
      btnText: 'Atnaujinti',
      btnClass: 'btn-warning',
      borderClass: 'border-warning',
      fields: [
        { name: 'username', value: 'Obuolys' },
        { name: 'email', value: 'mandarinas@gmail.com' },
        { name: 'imgSrc', value: 'https://unsplash.it/150/100' },
      ]
    })
  }

  /**
 * Atlieka pradinius veiksmus ir
 * atvaizduoja komponento dalis kurios NEpriklauso nuo besikeičiančių duomenų
 */
  intialize = () => {
    const { formProps, tableProps } = this.state;
    this.htmlElement = document.createElement('div');
    this.htmlElement.className = 'row g-3 flex-lg-row-reverse';

    const formContainer = document.createElement('div');
    formContainer.className = 'col-12 col-lg-3';
    this.form = new FormComponent(formProps);
    formContainer.appendChild(this.form.htmlElement);

    const tableContainer = document.createElement('div');
    tableContainer.className = 'col-12 col-lg-9';
    this.table = new TableComponent({
      ...tableProps,
      data: this.formatTableData()
    });
    tableContainer.appendChild(this.table.htmlElement);

    this.htmlElement.append(formContainer, tableContainer);
  }

  /**
   * Atvaizduoja komponento dalis kurios priklauso nuo besikeičiančių duomenų
   */
  render = () => {

  }
}
