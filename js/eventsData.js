/* Current JavaScript checks if these events are in the past or future and places them in the right place, 
but it doesn`t sort the dates ascending or descending, 
so the items on top of this list, will become on top of the events list (in the correct section).
*/

const events = [
    {
        id: 1,
        title: "Visiting Professor of Aeronautics",
        date: "2032-10-10 17:00:00",
        image: "./images/celso-405219.jpg",
        text: `<p>It is our pleasure to announce that Prof Sheila Widnall from the Massachusetts Institute of Technology will be delivering 3 lectures on the development of aeronautics and where the future lies in this exciting ‘space’.</p>`,
        seatsleft: 6,
    },
    {
        id: 2,
        title: "Night in the Museum",
        date: "2032-04-03 22:00:00",
        image: "./images/roberto-nickson-396152.jpg",
        text: `<p>Get your family together for an exciting night in the museum as you sleep over beside dinosaurs and science displays. Bring your own sleeping bag and get ready to rough it as we go exploring the wonders of science.</p>`,
        seatsleft: 8,
    },
    {
        id: 3,
        title: "Energetica Exhibition on Loan",
        date: "2032-04-10 17:00:00",
        image: "./images/scientific-2040795_1280.jpg",
        text: `<p>On loan from the NEMO Science Museum in Amsterdam, the Energetica exhibition is coming to the Community Science Museum. It’s a series of installations that allow visitors to experience the power of the elements as we harness them. From solar energy powering lighting, to ‘Wind Island’ that shows how turbines are able to use and control wind to create power.</p>`,
        seatsleft: 12,
    },
    {
        id: 4,
        title: "Visiting Professor of Aeronautics",
        date: "2032-04-17 17:00:00",
        image: "./images/celso-405219.jpg",
        text: `<p>It is our pleasure to announce that Prof Sheila Widnall from the Massachusetts Institute of Technology will be delivering 3 lectures on the development of aeronautics and where the future lies in this exciting ‘space’.</p>`,
        seatsleft: 7,
    },
    {
        id: 5,
        title: "Night in the Museum",
        date: "2032-03-14 22:00:00",
        image: "./images/roberto-nickson-396152.jpg",
        text: `<p>Get your family together for an exciting night in the museum as you sleep over beside dinosaurs and science displays. Bring your own sleeping bag and get ready to rough it as we go exploring the wonders of science.</p>`,
        seatsleft: 3,
    },
    {
        id: 6,
        title: "Energetica Exhibition on Loan",
        date: "2032-03-28 17:00:00",
        image: "./images/scientific-2040795_1280.jpg",
        text: `<p>On loan from the NEMO Science Museum in Amsterdam, the Energetica exhibition is coming to the Community Science Museum. It’s a series of installations that allow visitors to experience the power of the elements as we harness them. From solar energy powering lighting, to ‘Wind Island’ that shows how turbines are able to use and control wind to create power.</p>`,
        seatsleft: 10,
    },
    {
        id: 7,
        title: "Energetica Exhibition on Loan",
        date: "2022-03-21 17:00:00",
        image: "./images/scientific-2040795_1280.jpg",
        text: `<p>On loan from the NEMO Science Museum in Amsterdam, the Energetica exhibition is coming to the Community Science Museum. It’s a series of installations that allow visitors to experience the power of the elements as we harness them. From solar energy powering lighting, to ‘Wind Island’ that shows how turbines are able to use and control wind to create power.</p>`,
        seatsleft: 10,
    },
];
