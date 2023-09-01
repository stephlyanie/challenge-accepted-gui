import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function CreateCreationPage() {

    const [data, setData] = useState([]);

    return (
        <div>
            <CreationForm data={data} />
        </div>
    )
};

export default CreateCreationPage;