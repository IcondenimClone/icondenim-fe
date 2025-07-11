import React, { useState } from 'react';
import Modal from 'react-modal';
import videoBannerImg from '../assets/images/banner-video.jpg';
import buttonPlayVideo from '../assets/images/button-play-video.png'

Modal.setAppElement('#root');

function VideoBannerSection() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);
    const videoUrl = "https://www.youtube.com/embed/p2C-_nqTG4o?start=2";
    return (
        <>
            <section className="video-banner-section">
                <div className="container">
                    <h2 className="inner-title">Tìm Hiểu TechUrban® Jeans</h2>
                    <div className="video-banner-container" onClick={openModal}>
                        <img src={videoBannerImg} className="banner-image" />
                        <div className="banner-overlay"></div>
                        <div className="video-play-button">
                            <img src={buttonPlayVideo}></img>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                autoPlay
                className="video-modal"
                overlayClassName="video-modal-overlay"
            >
                <button onClick={closeModal} className="close-modal-button">×</button>
                <iframe
                    width="100%"
                    height="100%"
                    src={videoUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </Modal>
        </>
    );
}

export default VideoBannerSection;