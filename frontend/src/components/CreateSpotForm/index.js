import SpotForm from '../SpotForm';
import './CreateSpotForm.css';

const CreateSpotForm = () => {
    const spot = {
        country: '', 
        address: '', 
        city: '', 
        state: '', 
        lat: 1, 
        lng: 1, 
        description: '', 
        name: '', 
        price: '',
        SpotImages: [
            {
                url: '',
                preview: false
            },
            {
                url: '',
                preview: false
            },
            {
                url: '',
                preview: false
            },
            {
                url: '',
                preview: false
            },
            {
                url: '',
                preview: false
            },
        ]
    };

    return (
        <SpotForm
            spot={spot}
            formType="Create Spot"
        />
    );
};

export default CreateSpotForm;
