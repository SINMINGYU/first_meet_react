import React from "react";
import Books from "./Book";

function Library() {
    return (
        <div>
            <Books.Book1 name="처음 만난 파이썬" numOfPage={300} />
            <Books.Book1 name="처음 만난 AWS" numOfPage={400} />
            <Books.Book1 name="처음 만난 리액트" numOfPage={500} />
            <Books.Book2 name="처음 만난 신민규" />
        </div>
    );
}

export default Library;
