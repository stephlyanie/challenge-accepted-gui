import "./CreatePage.scss";
import CreateButton from "../../components/Buttons/CreateButton";

// Landing page for choosing to create a challenge or a creation
function CreatePage() {
  // Renders to page
  return (
    <section className="create-page">
      {/* Create a Challenge Button*/}
      <CreateButton
        buttonLink={"/create/challenge"}
        buttonClass={"challenge"}
        buttonTitle={"Post a Challenge"}
        buttonText={
          "Challenge your fellow creatives with your own project for them to respond to."
        }
      />

      {/* Create a Creation Button*/}
      <CreateButton
        buttonLink={"/create/creation"}
        buttonClass={"creation"}
        buttonTitle={"Make a Creation"}
        buttonText={"Respond to a challenge by creating something."}
      />
    </section>
  );
}

export default CreatePage;
