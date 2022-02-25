import React, { useEffect} from 'react';

const GiftDetail = (props) =>{
    console.log(props);

    useEffect(() => {
        if (props.id!=23){
            window.location.replace("loyalty://main/gifts/" + props.id);
        }
    }, []);
    

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