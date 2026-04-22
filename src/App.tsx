/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Search, 
  UserX, 
  Database, 
  Timer, 
  AlertCircle, 
  TrendingDown,
  MapPin,
  Radar,
  MessageSquare,
  Send,
  UserPlus,
  Copy,
  Users,
  BarChart3,
  CheckCircle2,
  PhoneCall,
  ChevronDown,
  Mail,
  Phone,
  LayoutDashboard,
  Store,
  Building2,
  Smile,
  Home
} from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-6 md:px-10 max-w-7xl mx-auto">
          <div className="text-2xl font-black text-primary tracking-tighter cursor-pointer">
            MKT Software
          </div>
          <div className="hidden lg:flex gap-8 items-center font-medium text-sm tracking-tight">
            <a href="#" className="text-secondary-container font-bold border-b-2 border-secondary-container pb-1">Tính năng</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">Giải pháp</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">Bảng giá</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">Hướng dẫn</a>
            <a href="#" className="text-on-surface-variant hover:text-primary transition-all">Tin tức</a>
          </div>
          <button className="bg-primary hover:bg-primary-container text-white px-6 py-2.5 rounded-lg font-bold transform transition-transform active:scale-95 shadow-lg shadow-primary/20">
            Đăng ký tư vấn
          </button>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-32 bg-gradient-to-br from-white to-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs bg-secondary-container/10 text-secondary-container font-bold rounded-full tracking-widest uppercase">
                TỰ ĐỘNG HÓA MARKETING 4.0
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-[1.1] tracking-tight">
                Quét Data Google Maps & Tự Động Hóa Zalo Chuyên Nghiệp
              </h1>
              <p className="text-lg text-on-surface-variant mb-10 max-w-xl leading-relaxed">
                Giải pháp đột phá giúp doanh nghiệp tìm kiếm Data khách hàng tiềm năng chính xác từ Google Maps, tiếp cận và chăm sóc khách hàng tự động trên Zalo, tối ưu 90% thời gian vận hành.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg shadow-secondary-container/20 transition-all transform hover:-translate-y-1">
                  Đăng ký tư vấn ngay
                </button>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all">
                  Xem demo sản phẩm
                </button>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container/10 rounded-full blur-3xl"></div>
              <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-outline-variant">
                <img 
                  className="rounded-xl w-full" 
                  alt="MKT Software Dashboard" 
                  src="https://raswbxfttpxbxahtkzrc.supabase.co/storage/v1/object/public/content-images/content/temp_1772705975260_jxscll.png" 
                />
                <div className="absolute -bottom-6 -left-6 glass-card p-4 rounded-xl shadow-xl flex items-center gap-4">
                  <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center text-white">
                    <BarChart3 size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">TĂNG TRƯỞNG</div>
                    <div className="text-lg font-bold text-primary">+250% Doanh thu</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Khó khăn bạn đang gặp phải?</h2>
              <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">
                Nhiều doanh nghiệp vẫn đang loay hoay với các phương pháp Zalo Marketing truyền thống, tiêu tốn quá nhiều thời gian và công sức.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: <Search />, title: "Tìm kiếm thủ công", desc: "Mất hàng giờ mỗi ngày để copy-paste số điện thoại từ Google Maps một cách vô định." },
                { icon: <UserX />, title: "Zalo bị chặn/khóa", desc: "Gửi tin nhắn hàng loạt bằng tay dẫn đến tài khoản Zalo thường xuyên bị đánh dấu spam." },
                { icon: <Database />, title: "Thiếu hụt Data", desc: "Không biết lấy khách hàng tiềm năng ở đâu để nuôi dưỡng và khai thác mỗi ngày." },
                { icon: <Timer />, title: "Tốn thời gian phản hồi", desc: "Quá tải khi phải gửi tin nhắn thủ công và trả lời từ hàng trăm khách hàng cùng một lúc." },
                { icon: <AlertCircle />, title: "Sai lệch đối tượng", desc: "Chạy quảng cáo tốn kém nhưng không tiếp cận đúng khách hàng theo khu vực." },
                { icon: <TrendingDown />, title: "Chi phí Marketing cao", desc: "Ngân sách Ads ngày càng đắt đỏ nhưng hiệu quả mang lại không tương xứng.", highlight: true },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.1 }}
                  className={`p-8 rounded-2xl border transition-all hover:bg-white hover:shadow-xl ${item.highlight ? 'bg-surface-container-low border-secondary-container/50' : 'bg-surface-container-low border-outline-variant'}`}
                >
                  <div className={`mb-4 ${item.highlight ? 'text-secondary-container' : 'text-primary'}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-primary">{item.title}</h3>
                  <p className="text-on-surface-variant leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Tính năng vượt trội của MKT Software</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <MapPin />, title: "Quét Maps theo từ khóa", desc: "Lấy toàn bộ thông tin doanh nghiệp, số điện thoại theo ngành nghề mong muốn." },
                { icon: <Radar />, title: "Quét theo khu vực", desc: "Target chính xác khách hàng trong phạm vi địa lý (Quận, Huyện) cụ thể." },
                { icon: <MessageSquare />, title: "Auto Add Friend Zalo", desc: "Tự động kết bạn với danh sách số điện thoại vừa quét được từ Google Maps." },
                { icon: <Send />, title: "Gửi tin nhắn hàng loạt", desc: "Gửi kịch bản tư vấn, khuyến mãi tự động đến hàng nghìn khách hàng mỗi ngày." },
                { icon: <UserPlus />, title: "Kéo mem vào Group", desc: "Xây dựng cộng đồng Zalo lớn mạnh bằng cách tự động mời thành viên vào nhóm." },
                { icon: <Copy />, title: "Đăng bài tự động", desc: "Tự động đăng bài lên Newsfeed hàng loạt tài khoản để tăng độ uy tín brand." },
                { icon: <LayoutDashboard />, title: "Quản lý nhiều tài khoản", desc: "Vận hành song song 10-100 tài khoản Zalo cùng lúc trên một phần mềm." },
                { icon: <BarChart3 />, title: "Báo cáo hiệu quả", desc: "Thống kê chi tiết số lượt quét, số tin nhắn đã gửi và tỷ lệ phản hồi." },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white p-6 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary/10"
                >
                  <div className="w-12 h-12 bg-primary/5 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-primary">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg mb-2 text-primary">{item.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/2">
                <motion.h2 {...fadeInUp} className="text-3xl md:text-4xl font-bold text-primary mb-8">Quy trình triển khai 5 bước</motion.h2>
                <div className="space-y-8">
                  {[
                    { step: 1, title: "Xác định từ khóa & địa điểm", desc: "Chọn ngành nghề bạn muốn tiếp cận và khu vực quét (VD: Spa tại TP.HCM)" },
                    { step: 2, title: "Quét dữ liệu tự động", desc: "Phần mềm tự động thu thập hàng nghìn SĐT thực từ Google Maps." },
                    { step: 3, title: "Lọc & Phân loại Data", desc: "Tách lọc những số điện thoại có sử dụng Zalo để tối ưu chiến dịch." },
                    { step: 4, title: "Chạy kịch bản Automation", desc: "Thiết lập kịch bản kết bạn và gửi tin nhắn hoàn toàn tự động." },
                    { step: 5, title: "Chốt đơn & Đo lường", desc: "Tiếp nhận phản hồi và điều chỉnh kịch bản để tăng tỷ lệ chuyển đổi." },
                  ].map((item, i) => (
                    <motion.div key={i} {...fadeInUp} transition={{ delay: i * 0.1 }} className="flex gap-6 items-start">
                      <div className="bg-primary text-white w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center font-bold shadow-lg">
                        {item.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-lg text-primary">{item.title}</h5>
                        <p className="text-on-surface-variant mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <img 
                    className="rounded-3xl shadow-2xl" 
                    alt="Process Visualization" 
                    src="https://raswbxfttpxbxahtkzrc.supabase.co/storage/v1/object/public/content-images/content/temp_1769157869696_law769.png" 
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4">
                    <div className="bg-white/95 backdrop-blur p-4 rounded-xl shadow-xl border border-blue-100 flex items-center gap-3 animate-bounce">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-primary">Đã quét 12,450 SĐT</span>
                    </div>
                    <div className="bg-white/95 backdrop-blur p-4 rounded-xl shadow-xl border border-blue-100 flex items-center gap-3 animate-pulse delay-700">
                      <div className="w-2 h-2 bg-secondary-container rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-primary">980 tin nhắn Zalo đã gửi</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Target Audience */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Phù hợp với ai?</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: <Store />, label: "Chủ Shop/Cửa hàng" },
                { icon: <Building2 />, label: "Doanh nghiệp SMEs" },
                { icon: <Smile />, label: "Dịch vụ Spa/Beauty" },
                { icon: <Home />, label: "Bất động sản" },
                { icon: <Users />, label: "Đội ngũ Sales" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center text-center p-8 bg-white rounded-2xl w-full sm:w-56 shadow-soft hover:shadow-lg transition-all"
                >
                  <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 text-primary">
                    {item.icon}
                  </div>
                  <h5 className="font-bold text-primary">{item.label}</h5>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[40px] p-8 md:p-16 lg:p-20 text-white flex flex-col lg:flex-row gap-16 items-center shadow-2xl"
            >
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">Tại sao nên chọn MKT Software?</h2>
                <ul className="space-y-6">
                  {[
                    "Cam kết hiệu quả thực tế - Không chỉ là phần mềm.",
                    "Dễ dàng sử dụng, giao diện tiếng Việt 100%.",
                    "Hỗ trợ kỹ thuật 24/7 qua Ultraview/Teamview.",
                    "Cập nhật tính năng mới liên tục và miễn phí.",
                    "Bảo mật dữ liệu tuyệt đối cho người dùng."
                  ].map((text, i) => (
                    <li key={i} className="flex gap-4 items-center">
                      <CheckCircle2 className="text-secondary-container shrink-0" fill="currentColor" />
                      <span className="text-lg opacity-90">{text}</span>
                    </li>
                  ))}
                </ul>
                <button className="mt-12 bg-secondary-container text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-black/20 uppercase tracking-wide">
                  NHẬN TƯ VẤN MIỄN PHÍ NGAY
                </button>
              </div>
              <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
                {[
                  { value: "5,000+", label: "Khách hàng tin dùng" },
                  { value: "90%", label: "Tiết kiệm thời gian" },
                  { value: "10+", label: "Năm kinh nghiệm" },
                  { value: "24/7", label: "Hỗ trợ kỹ thuật" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/10">
                    <div className="text-3xl md:text-4xl font-black mb-2">{stat.value}</div>
                    <div className="text-sm opacity-70 uppercase tracking-widest font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp}>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Sẵn sàng bùng nổ doanh số?</h2>
                <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
                  Điền thông tin bên dưới để được chuyên gia của chúng tôi tư vấn giải pháp tối ưu nhất cho ngành nghề của bạn.
                </p>
                <div className="flex items-center gap-6 p-8 bg-white rounded-2xl shadow-soft">
                  <div className="bg-secondary-container/10 p-4 rounded-full text-secondary-container">
                    <PhoneCall size={32} />
                  </div>
                  <div>
                    <div className="text-xs text-on-surface-variant font-bold uppercase tracking-widest mb-1">HOTLINE HỖ TRỢ</div>
                    <div className="text-2xl font-black text-primary">037.999.8457</div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-2xl border border-outline-variant"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">HỌ VÀ TÊN</label>
                      <input 
                        type="text" 
                        placeholder="Nhập tên của bạn" 
                        className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">SỐ ĐIỆN THOẠI</label>
                      <input 
                        type="tel" 
                        placeholder="Nhập số điện thoại" 
                        className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">LĨNH VỰC</label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                        <option>Bán lẻ / Shop</option>
                        <option>Bất động sản</option>
                        <option>Spa / Mỹ phẩm</option>
                        <option>Giáo dục / Dịch vụ</option>
                        <option>Khác</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">EMAIL</label>
                      <input 
                        type="email" 
                        placeholder="Nhập email của bạn" 
                        className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">GHI CHÚ NHU CẦU</label>
                    <textarea 
                      rows={3} 
                      placeholder="Mô tả qua nhu cầu của bạn..." 
                      className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300"
                    ></textarea>
                  </div>
                  <button type="submit" className="w-full bg-secondary-container text-white py-5 rounded-xl font-bold text-lg hover:brightness-110 transform transition-transform active:scale-95 shadow-lg shadow-secondary-container/20 uppercase tracking-wide">
                    Gửi yêu cầu ngay
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Câu hỏi thường gặp</h2>
            <div className="space-y-4">
              {[
                { q: "Phần mềm có khó sử dụng không?", a: "MKT Software được thiết kế với giao diện tiếng Việt hoàn toàn, các nút bấm trực quan. Chúng tôi có đội ngũ kỹ thuật hướng dẫn 1-1 cho đến khi bạn sử dụng thành thạo." },
                { q: "Sử dụng phần mềm có bị khóa tài khoản Zalo không?", a: "Phần mềm tích hợp công nghệ mô phỏng thao tác người dùng thật và cơ chế delay thông minh. Nếu tuân thủ đúng kịch bản được chuyên gia MKT tư vấn, sẽ rất an toàn cho tài khoản của bạn." },
                { q: "Dữ liệu quét được từ Google Maps có chính xác không?", a: "Dữ liệu được quét real-time trực tiếp từ kết quả tìm kiếm của Google Maps, đảm bảo là những số điện thoại và thông tin doanh nghiệp đang hoạt động thực tế." },
                { q: "Tôi có được cập nhật khi phần mềm có phiên bản mới không?", a: "Có, tất cả các khách hàng đang sử dụng bản quyền của MKT Software đều được tự động cập nhật lên phiên bản mới nhất hoàn toàn miễn phí." }
              ].map((faq, i) => (
                <div 
                  key={i} 
                  className={`bg-surface-container-low rounded-2xl overflow-hidden border transition-all ${openFaq === i ? 'border-primary/20 ring-1 ring-primary/5' : 'border-transparent'}`}
                >
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center w-full p-6 text-left font-bold text-primary"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-6 pb-6 text-on-surface-variant leading-relaxed"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="text-xl font-black text-primary tracking-tighter uppercase">MKT Software</div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs">
              Giải pháp phần mềm Marketing tự động hóa hàng đầu Việt Nam. Giúp doanh nghiệp tối ưu chi phí và bùng nổ doanh số.
            </p>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Phần mềm</h6>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Phần mềm MKT Zalo</li>
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Phần mềm MKT Care</li>
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Phần mềm MKT UID</li>
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Phần mềm MKT Maps</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Hỗ trợ khách hàng</h6>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Về chúng tôi</li>
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Chính sách bảo mật</li>
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Điều khoản dịch vụ</li>
              <li className="hover:text-secondary-container transition-colors cursor-pointer">Hệ thống đại lý</li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold text-primary mb-6 uppercase tracking-widest text-xs">Liên hệ</h6>
            <ul className="space-y-4 text-on-surface-variant text-sm">
              <li className="flex gap-3 items-center">
                <Mail size={16} className="text-secondary-container" />
                <span>haivt@phanmemmkt.vn</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={16} className="text-secondary-container" />
                <span>037.999.8457</span>
              </li>
              <li className="flex gap-3">
                <MapPin size={16} className="text-secondary-container shrink-0 mt-1" />
                <span>Số 35 Lê Văn Thiêm, Thanh Xuân, Hà Nội</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-200 text-center text-on-surface-variant/40 text-xs tracking-widest uppercase font-medium">
          © 2026 MKT Software. Engineered for Growth.
        </div>
      </footer>
    </div>
  );
}
