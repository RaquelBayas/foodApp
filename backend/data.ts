module.exports = {
  foods:[
    {
      id: 1,
      name: 'Pizza jamon',
      description: '',
      price: 10,
      tags: ['Pizza'],
      favorite: false,
      stars: 3,
      imageUrl: '/assets/images/photo1.jpg'
    },
    {
      id: 2,
      name: 'Pizza pollo',
      description: '',
      price: 12,
      tags: ['Pizza'],
      favorite: false,
      stars: 3,
      imageUrl: '/assets/images/photo2.jpg'
    },
    {
      id: 3,
      name: 'Hamburguesa clásica',
      description: 'Deliciosa hamburguesa con doble carne de vacuno, queso cheddar, lechuga, tomate y cebolla en pan brioche tostado con dos sésamos. Acompañada de guarnición a elegir.',
      price: 10.50,
      tags: ['Hamburguesa'],
      favorite: false,
      stars: 4,
      imageUrl: '/assets/images/photo3.jpg'
    }
  ],
  tags: [
    { name: 'All', count: 3 },
    { name: 'Pizza', count: 2 },
    { name: 'Hamburguesa', count: 1 }
  ],
  sample_users: [
    {
      name: "John Smith",
      email: "john@gmail.com",
      password: "1234567",
      address: "Madrid",
      isAdmin: true,
    },
    {
      name: "Jane Smith",
      email: "jane@gmail.com",
      password: "1234567",
      address: "Barcelona",
      isAdmin: false,
    }
  ] 
};
