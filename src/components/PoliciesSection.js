import PolicyItem from './PolicyItem';
import policyIcon1 from '../assets/images/img-transport.webp';
import policyIcon2 from '../assets/images/img-change-home.webp';
import policyIcon3 from '../assets/images/img-cod.webp';
import policyIcon4 from '../assets/images/img-phone.webp';
const policiesData = [
  {
    icon: policyIcon1,
    title: 'Miễn phí vận chuyển',
    subtitle: 'Đơn từ 399K'
  },
  {
    icon: policyIcon2,
    title: 'Đổi hàng tận nhà',
    subtitle: 'Trong vòng 15 ngày'
  },
  {
    icon: policyIcon3,
    title: 'Thanh toán COD',
    subtitle: 'Yên tâm mua sắm'
  },
  {
    icon: policyIcon4,
    title: 'Hotline: 028.73066.060',
    subtitle: 'Hỗ trợ từ 8h30-24h00'
  }
];

function PoliciesSection() {
  return (
    <section className="policies-section">
      <div className="container">
        <div className="policies-grid">
          {policiesData.map((policy, index) => (
            <PolicyItem 
              key={index}
              icon={policy.icon}
              title={policy.title}
              subtitle={policy.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default PoliciesSection;