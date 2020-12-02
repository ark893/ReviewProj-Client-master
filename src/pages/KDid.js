import React from 'react';

export default function MovieList(props) {
    return (
        <>
        {/* <style jsx>
        {
          .prop-name {
            height:30px;
            width:30px;
            background-color: red;
          }
        }
    </style> */}
        <div className="prop-name">
            {props.name}
            {props.duration}
            {props.comments}
        </div>
        </>
    );
}

