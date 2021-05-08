import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//Books Objects
const books = [
    {
        id: 1,
        author: "Emily Watson",
        title: "Candlekeep Mysteries",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81Hkjr8InTL._AC_UL200_SR200,200_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehe...",
    },
    {
        id: 2,
        author: "Amelia Hepworth",
        title: "I Love You To The Moon And Black",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehe...",
    },
    {
        id: 3,
        author: "Hasan Al Mamun",
        title: "The Pragmatic Programmer: 20th Edition",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/91WFb-PpoNL._AC_UL200_SR200,200_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehen...",
    },
    {
        id: 4,
        author: "Elizabeth Heiskell",
        title: "Come On Over!",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/51+5n7xbYSL._AC_SX184_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehe...",
    },
    {
        id: 5,
        author: "James Clear",
        title: "Atomic Habits",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._AC_SX184_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehe...",
    },
    {
        id: 6,
        author: "Shannon Bream",
        title: "The Women of the Bible Speak",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/516Yy6yh8XL._AC_SX184_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehe...",
        btn: <button className="btn btn-primary">Ok</button>,
    },
    {
        id: 6,
        author: "Ann Whitford Paul, David Walker",
        title: "If Animals Kissed Good Night",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/51PRQuO-xjL._AC_SX184_.jpg",
        desc:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corrupti, commodi ex eum vel voluptatibus blanditiis odio reprehe...",
    },
];

const BookList = () => {
    return (
        <section className="booklist">
            <ContainerBookList />
        </section>
    );
};

const ContainerBookList = () => {
    return (
        <div className="container">
            <RowBookList />
        </div>
    );
};

const RowBookList = () => {
    return (
        <div className="row">
            {books.map(book => (
                <div className="col-md-4 py-4" key={book.id}>
                    <Book {...book}></Book>
                </div>
            ))}
        </div>
    );
};

const Book = props => {
    const { author, title, imgSrc, desc, btn } = props;
    return (
        <article className="booklist__article card card-body h-100">
            <img className="booklist__img mb-2" src={imgSrc} alt={title} />
            <h4 className="booklist__titles">{title}</h4>
            <h5 className="booklist__author">{author}</h5>
            <p className="booklist__desc">{desc}</p>
            {btn}
        </article>
    );
};

const Sections = () => {
    return (
        <>
            <BookList />
        </>
    );
};

ReactDom.render(<Sections />, document.getElementById("root"));
