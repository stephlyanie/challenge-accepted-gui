import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CreateForm from "../../components/CreateForm/CreateForm";

function CreatePage() {

    const [data, setData] = useState([]);

    return (
        <div>
            <CreateForm data={data} />
        </div>
    )
};

export default CreatePage;