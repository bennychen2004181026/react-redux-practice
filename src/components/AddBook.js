import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/bookSlice";

function AddBook ()
{
    const [ title, setTitle ] = useState( '' );
    const [ description, setDescription ] = useState( '' );
    const dispatch = useDispatch();
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        dispatch( addBook( { title, description } ) );
        setTitle( '' );
        setDescription( '' );
    };
    return (
        <div>
            <h2>Add book</h2>
            <form onSubmit={ handleSubmit } F>
                <input value={ title }
                    placeholder="Title"
                    required
                    onChange={ ( e ) => setTitle( e.target.value ) }
                />
                <input value={ description }
                    placeholder="Description"
                    required
                    onChange={ ( e ) => setDescription( e.target.value ) }
                />
                <input type='submit' value='Add' />
            </form>
        </div>
    );
}
export default AddBook;