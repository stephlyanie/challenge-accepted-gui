import "./CreatePage.scss";
import CreateButton from "../../components/Buttons/CreateButton";


function CreatePage() {
    return (
        <section className="create-page">
            <CreateButton buttonLink={"/create/challenge"} buttonClass={"challenge"} buttonTitle={"Post a Challenge"} buttonText={"Challenge your fellow creatives with your own project for them to respond to."} />
            <CreateButton buttonLink={"/create/creation"} buttonClass={"creation"} buttonTitle={"Make a Creation"} buttonText={"Respond to a challenge by creating something."} />
        </section>
    )
}

export default CreatePage;