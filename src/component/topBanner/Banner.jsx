import bannerImage from '../../assets/Banner.jpg'; // Go two levels up

export default function Banner() {
  return (
    <div>
      <img src={bannerImage} alt="Banner" style={{ width: '100%', height: '76vh' }} />
    </div>
  );
}
