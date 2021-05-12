import React from 'react';

const Card = (props) =>{
        return(
            <div className='tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'>
            <img src={`https://robohash.org/${props.id}?size=200x200`} alt='robots'></img>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        );
    }
export default Card;

// You can use both (props) and ({id,name,email}).

// const Card = ({id,name,email}) =>{
//     return(
//         <div className='tc bg-light-green dib br3 pad3 ma2 grow bw2 shadow-5'>
//         <img src={`https://robohash.org/${id}?size=200x200`} alt='robots'></img>
//         <h1>{name}</h1>
//         <p>{email}</p>
//         </div>
//     );
// }
// export default Card;