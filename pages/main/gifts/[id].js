import React from 'react';

const GiftDetail = (props) =>{
    console.log(props);

    return (<div>
        {'Random text, id is '+props.id}
    </div>)
}

export const getServerSideProps = ( { params }) => {
    return {
        props:{
            id: params.id
        }
    }
}

export default GiftDetail;