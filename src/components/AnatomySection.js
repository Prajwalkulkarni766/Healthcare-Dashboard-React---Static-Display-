import HealthStatusCards from "./HealthStatusCards";

function AnatomySection() {
  return (
    <>
      <div className="anatomy-section">
        <div className="anatomy-figure">
          <div className="human-body">
            <div className="body-part heart healthy" data-tooltip="Healthy Heart">
              <div className="indicator"></div>
            </div>
            <div className="body-part lungs healthy" data-tooltip="Healthy Lungs">
              <div className="indicator"></div>
            </div>
            <div className="body-part teeth warning" data-tooltip="Teeth Need Checkup">
              <div className="indicator"></div>
            </div>
            <div className="body-part bone healthy" data-tooltip="Healthy Bone">
              <div className="indicator"></div>
            </div>
          </div>
        </div>
        <HealthStatusCards />
      </div>

    </>
  )
}

export default AnatomySection;