import { Modal, ModalBody, Button } from "reactstrap";

const VideoModal = ({ show, onCloseClick }: any) => {
  return (
    <Modal isOpen={show} toggle={onCloseClick} centered={true} backdrop='static' keyboard={ false } size="xl">
      <ModalBody className="p-0">
        <div className="position-relative">
          <div className="position-absolute top-0 start-0 p-3">
              <Button onClick={onCloseClick} className="border-0 text-white opacity-100 px-2 py-1" style={{ background: "rgba(255,255,255,0.15)", borderRadius: '50%' }}><i className="ri-close-line fs-20"></i></Button>
          </div>
          <iframe 
            src="https://drive.google.com/file/d/1BIJrJLGnpJrvCQ-yR_KKuZEoE7HJDkqf/preview" 
            allow='autoplay'
            title='FFS Summit 2024'
            className='w-100 rounded-4 border border-dark'
            style={{ height: '450px' }}
          />
        </div>
      </ModalBody>
    </Modal>
  );
};

export default VideoModal;