import './App.css';
import { useState } from 'react';
import Snowfall from 'react-snowfall';
import Typewriter from 'typewriter-effect';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { RiSendPlaneFill } from 'react-icons/ri';

import BackgroundImg from './images/bg.png';
import PopupImg from './images/popup.png';

function App() {
  const [openPopup, setOpenPopup] = useState(true);
  const [number, setNumber] = useState();
  const [name, setName] = useState('');
  const [nameBank, setNameBank] = useState('');
  const [textError, setTextError] = useState('');

  const onOpenModal = () => setOpenPopup(true);
  const onCloseModal = () => setOpenPopup(false);

  const handleClick = async () => {
    try {
      const data = await fetch('http://localhost:3001/api/christmas-2022', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number, name, nameBank }),
      });
      if (data.status === 200) {
        onCloseModal();
      } else {
        setTextError('Có sự có xảy ra. Vui lòng lh: 0359832448, Thắng Dev');
      }
    } catch (error) {
      setTextError('Có sự có xảy ra. Vui lòng lh: 0359832448, Thắng Dev');
    }
  };

  return (
    <div
      className='App'
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        height: '100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <Snowfall snowflakeCount={200} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '100vh',
        }}
      >
        <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>
          <Typewriter
            options={{
              strings: ['CHÚC BẠN GIÁNG SINH VUI VẺ!!!', 'NHẬP MÃ CỦA BẠN VÀ NHẤN ENTER', 'BẤT NGỜ ĐANG CHỜ BẠN <3'],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <input
          placeholder='NHẬP MÃ'
          style={{
            borderRadius: 50,
            padding: '15px 20px',
            width: '200px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && e.target.value === 'CHRISTMAS2022') {
              onOpenModal();
            }
          }}
        />
      </div>

      <Modal open={openPopup} onClose={onCloseModal} center showCloseIcon={false} classNames={{ modal: 'customModal' }}>
        <div
          style={{
            backgroundImage: `url(${PopupImg})`,
            height: '100%',
            backgroundSize: 'contain',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              minHeight: '100%',
            }}
          >
            <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: 10 }}>
              <Typewriter
                options={{
                  strings: [
                    'NHẬP MOMO HOẶC STK NGÂN HÀNG',
                    'NHẬP TÊN CỦA BẠN',
                    'VÀ TÊN NGÂN HÀNG (NẾU DÙNG NGÂN HÀNG)',
                    'MÌNH SẼ GỬI CHO BẠN MÓN QUÀ',
                    'GIÁ TRỊ SẼ ĐƯỢC BẬT MÍ',
                    'KHI BẠN NHẬN ĐƯỢC NHÉ',
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <input
              onChange={(e) => setNumber(e.target.value)}
              placeholder='NHẬP MOMO/STK NGÂN HÀNG'
              style={{
                borderRadius: 50,
                padding: '15px 20px',
                width: '200px',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 10,
              }}
            />
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder='TÊN CỦA BẠN'
              style={{
                borderRadius: 50,
                padding: '15px 20px',
                width: '200px',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 10,
              }}
            />
            <input
              onChange={(e) => setNameBank(e.target.value)}
              placeholder='TÊN NGÂN HÀNG (NẾU SỬ DỤNG STK NGÂN HÀNG)'
              style={{
                borderRadius: 50,
                padding: '15px 20px',
                width: '200px',
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: 10,
              }}
            />
            {textError && <p style={{ color: '#fff' }}>{textError}</p>}

            <div style={{ width: '100%', textAlign: 'end', marginRight: 80 }}>
              <RiSendPlaneFill
                style={{ position: 'relative', top: 2 }}
                color='#fff'
                fontSize={30}
                onClick={handleClick}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default App;
