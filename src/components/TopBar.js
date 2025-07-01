function TopBar() {
  const marqueeItems = [
        'VOUCHER 10% TỐI ĐA 10K',
        "VOUCHER 30K ĐƠN TỪ 599K",
        "VOUCHER 70K ĐƠN TỪ 899K",
        "VOUCHER 100K ĐƠN TỪ 1199K"
  ];

  return (
    <div className="top-bar">
      <div className="marquee-content">
        {marqueeItems.map((item, index) => (
          <span key={`first-${index}`} className="marquee-item">{item}</span>
        ))}
        {marqueeItems.map((item, index) => (
          <span key={`second-${index}`} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default TopBar;