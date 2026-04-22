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
  X,
  MessageCircle,
  Headset,
  Zap,
  Play,
  PlayCircle,
  Gemini,
  Award,
  ShieldCheck,
  Star,
  UserCog,
  Gift,
  Check
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Professional Overlay with deep blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-[#0B2F7A]/60 backdrop-blur-md"
          />
          
          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="bg-white w-full max-w-4xl rounded-[40px] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.4)] relative pointer-events-auto flex flex-col md:flex-row min-h-[500px]"
            >
              {/* Close Button - Premium floating style */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/80 hover:bg-white md:bg-gray-100/50 md:hover:bg-gray-100 transition-all text-gray-800 z-50 shadow-sm"
              >
                <X size={20} />
              </button>

              {/* LEFT COLUMN: Value Proposition (Premium Dark) */}
              <div className="w-full md:w-5/12 bg-[#0B2F7A] p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
                {/* Decorative glow */}
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]" />
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/5 w-fit mb-6">
                    <span className="w-2 h-2 bg-secondary-container rounded-full animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Premium Support</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-6 leading-tight">
                    GIẢI PHÁP TÌM KHÁCH HÀNG NHANH HƠN TỪ GOOGLE MAPS ĐẾN ZALO
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      "Quét data khách hàng từ Google Maps theo từ khóa và khu vực",
                      "Tự động kết bạn và nhắn tin Zalo giúp tiết kiệm thời gian",
                      "Hỗ trợ kéo nhóm Zalo nhanh, phù hợp người bán sỉ",
                      "Hướng dẫn 1-1, dễ dùng, dễ triển khai"
                    ].map((benefit, i) => (
                      <div key={i} className="flex gap-3 items-start group">
                        <div className="mt-1 bg-secondary-container/20 p-0.5 rounded-full">
                          <CheckCircle2 size={16} className="text-secondary-container" fill="currentColor" fillOpacity={0.2} />
                        </div>
                        <span className="text-sm text-blue-100/80 leading-snug group-hover:text-white transition-colors">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-auto">
                  <p className="text-[10px] font-medium text-blue-200/40 uppercase tracking-[0.2em] text-center leading-relaxed">
                    Giải pháp cho chủ shop, người bán sỉ, đội sale và doanh nghiệp SMEs
                  </p>
                </div>
              </div>

              {/* RIGHT COLUMN: Contact Actions (Conversion Zone) */}
              <div className="w-full md:w-7/12 bg-[#F5F7FB] p-8 md:p-14 flex flex-col justify-center relative">
                <div className="max-w-md mx-auto w-full text-center md:text-left relative z-10">
                  <div className="inline-block px-3 py-1 bg-primary/5 text-primary text-[10px] font-extrabold uppercase tracking-[0.2em] rounded-md mb-4">
                    HỖ TRỢ & TƯ VẤN NHANH
                  </div>
                  <h4 className="text-3xl md:text-4xl font-black text-primary mb-4 tracking-tight">
                    LIÊN HỆ NGAY
                  </h4>
                  <p className="text-on-surface-variant text-base leading-relaxed mb-10">
                    Chọn kênh liên hệ thuận tiện để tôi hỗ trợ anh/chị nhanh nhất về giải pháp quét data Google Maps và tự động hóa Zalo.
                  </p>

                  <div className="space-y-4">
                    {/* Zalo Card Button */}
                    <a 
                      href="https://zalo.me/0379998457" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 bg-white p-5 rounded-[28px] shadow-[0_4px_15px_rgba(0,104,255,0.08)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgba(0,104,255,0.15)] hover:-translate-y-1 active:scale-95"
                    >
                      <div className="w-14 h-14 bg-[#0068FF]/10 rounded-2xl flex items-center justify-center text-[#0068FF] group-hover:bg-[#0068FF] group-hover:text-white transition-all duration-300">
                        <MessageCircle size={28} />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hỗ trợ Zalo</div>
                        <div className="text-xl font-bold text-primary group-hover:text-[#0068FF] transition-colors tracking-tight">037.999.8457</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#0068FF]/10 group-hover:text-[#0068FF] transition-all">
                        <ChevronDown size={20} className="-rotate-90" />
                      </div>
                    </a>

                    {/* Telegram Card Button */}
                    <a 
                      href="https://t.me/thehaimkt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center gap-5 bg-white p-5 rounded-[28px] shadow-[0_4px_15px_rgba(36,161,222,0.08)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgba(36,161,222,0.15)] hover:-translate-y-1 active:scale-95"
                    >
                      <div className="w-14 h-14 bg-[#24A1DE]/10 rounded-2xl flex items-center justify-center text-[#24A1DE] group-hover:bg-[#24A1DE] group-hover:text-white transition-all duration-300">
                        <Send size={28} />
                      </div>
                      <div className="text-left flex-1">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Hỗ trợ Telegram</div>
                        <div className="text-xl font-bold text-primary group-hover:text-[#24A1DE] transition-colors tracking-tight">@thehaimkt</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 group-hover:bg-[#24A1DE]/10 group-hover:text-[#24A1DE] transition-all">
                        <ChevronDown size={20} className="-rotate-90" />
                      </div>
                    </a>
                  </div>
                  
                  <div className="mt-8 flex items-center justify-center md:justify-start gap-4">
                     <span className="w-1 h-1 bg-secondary-container rounded-full" />
                     <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Phản hồi nhanh • Tư vấn thực chiến</span>
                     <span className="w-1 h-1 bg-secondary-container rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/thehaiss09@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setFormStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="flex justify-between items-center h-20 px-6 md:px-10 max-w-7xl mx-auto">
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-2xl font-black text-primary tracking-tighter cursor-pointer"
          >
            MKT Software
          </div>
            <div className="hidden lg:flex gap-8 items-center font-medium text-sm tracking-tight">
            <a href="#features" className="text-on-surface-variant hover:text-primary transition-all">Tính năng</a>
            <a href="#process" className="text-on-surface-variant hover:text-primary transition-all">Quy trình</a>
            <a href="#pricing" className="text-on-surface-variant hover:text-primary transition-all">Bảng giá</a>
            <a href="#video-demo" className="text-on-surface-variant hover:text-primary transition-all">Video Demo</a>
            <a href="#feedback" className="text-on-surface-variant hover:text-primary transition-all">Feedback</a>
          </div>
          <button 
            onClick={() => setIsContactModalOpen(true)}
            className="bg-secondary-container hover:brightness-110 text-white px-6 py-2.5 rounded-lg font-bold transform transition-all active:scale-95 shadow-lg shadow-secondary-container/20 hover:shadow-secondary-container/40 hover:-translate-y-0.5"
          >
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
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="bg-secondary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg shadow-secondary-container/20 transition-all transform hover:-translate-y-1 active:scale-95 hover:shadow-secondary-container/40"
                >
                  Đăng ký tư vấn ngay
                </button>
                <a 
                  href="#video-demo"
                  className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all inline-flex items-center justify-center"
                >
                  Xem demo sản phẩm
                </a>
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
        <section id="features" className="py-24 bg-surface-container-lowest">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-16">Tính năng vượt trội của MKT Software</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: <MapPin />, title: "Quét Maps theo từ khóa", desc: "Lấy toàn bộ thông tin doanh nghiệp, số điện thoại theo ngành nghề mong muốn." },
                { icon: <Radar />, title: "Quét theo khu vực", desc: "Target chính xác khách hàng trong phạm vi địa lý (Quận, Huyện) cụ thể." },
                { icon: <MessageSquare />, title: "Auto Add Friend Zalo", desc: "Tự động kết bạn với danh sách số điện thoại vừa quét được từ Google Maps." },
                { icon: <Send />, title: "Gửi tin nhắn hàng loạt", desc: "Gửi kịch bản tư vấn, khuyến mãi tự động đến hàng nghìn khách hàng mỗi ngày." },
                { icon: <UserPlus />, title: "Kéo mem vào Group", desc: "Xây dựng cộng đồng Zalo lớn mạnh bằng cách tự động mời thành viên vào nhóm." },
                { icon: <UserCog />, title: "Cá nhân hóa tin nhắn cho từng khách hàng cụ thể", desc: "Tự động gửi tin nhắn kèm thông tin riêng biệt cho từng người giúp tăng tỷ lệ phản hồi." },
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
        <section id="process" className="pt-24 pb-0 bg-white relative overflow-hidden">
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

        {/* Video Demo Section */}
        <section id="video-demo" className="pt-12 pb-0 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10 text-center">
            <motion.div {...fadeInUp}>
              <span className="inline-block px-4 py-1.5 mb-6 text-xs bg-secondary-container/10 text-secondary-container font-bold rounded-full tracking-widest uppercase">
                TRẢI NGHIỆM TRỰC QUAN
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
                Video Demo Cách Thực Hiện
              </h2>
              <p className="text-lg text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
                Xem ngay video hướng dẫn chi tiết cách quét data Google Maps và tự động hóa Zalo để bùng nổ tệp khách hàng tiềm năng.
              </p>
              
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,47,122,0.15)] border-8 border-white group">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/MHn7r7QgjxA?si=eMlz2-EKYZ-tuJG5" 
                  title="MKT Software Demo Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>

              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="mt-12 inline-flex items-center gap-3 bg-secondary-container text-white px-8 py-4 rounded-xl font-bold text-lg hover:brightness-110 shadow-lg shadow-secondary-container/20 transition-all transform hover:-translate-y-1 active:scale-95"
              >
                <Zap size={20} />
                TÔI MUỐN TƯ VẤN CÁCH LÀM NÀY
              </button>
            </motion.div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-50/30 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
        </section>

        {/* Why Us Section */}
        <section className="pt-12 pb-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <h2 className="text-3xl md:text-4xl font-black text-center text-primary mb-16 uppercase tracking-tight">
              TẠI SAO NÊN CHỌN MKT SOFTWARE?
            </h2>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary rounded-[40px] p-8 md:p-16 lg:p-20 text-white flex flex-col lg:flex-row gap-16 items-center shadow-2xl"
            >
              <div className="lg:w-1/2">
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
                <button 
                  onClick={() => setIsContactModalOpen(true)}
                  className="mt-12 bg-secondary-container text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-black/20 uppercase tracking-wide"
                >
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

        {/* Feedback Section */}
        <section id="feedback" className="py-24 bg-surface-container-low overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs bg-secondary-container/10 text-secondary-container font-bold rounded-full tracking-widest uppercase">
                SOCIAL PROOF
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6 uppercase">
                Khách Hàng Nói Gì Về Chúng Tôi?
              </h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                Hơn 5.000+ cá nhân và doanh nghiệp đã bùng nổ doanh số khi ứng dụng giải pháp tự động hóa từ MKT Software.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: "6-IqQPIfkHs", title: "Cung Ứng Lao Động Vũ Vân Anh", desc: "Chúng tôi đã tìm được hàng nghìn đối tác tiềm năng chỉ sau vài ngày sử dụng phần mềm." },
                { id: "IRHGm38dnJE", title: "Chị Hường - Kinh doanh online", desc: "Tiết kiệm cực kỳ nhiều thời gian trong việc kết bạn và gửi tin nhắn quan tâm khách hàng." },
                { id: "baUVpr_UAVI", title: "Thế giới Bảo hiểm Ô tô", desc: "Giải pháp quét data Google Maps thực sự là bước ngoặt cho đội ngũ sales của công ty." }
              ].map((video, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl border border-outline-variant hover:shadow-2xl transition-all group"
                >
                  <div className="aspect-video relative">
                    <iframe 
                      className="absolute inset-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex text-orange-400">
                        {[...Array(5)].map((_, i) => <Zap key={i} size={14} fill="currentColor" />)}
                      </div>
                      <span className="text-xs font-bold text-on-surface-variant">5.0 RATING</span>
                    </div>
                    <h4 className="font-bold text-primary mb-2 line-clamp-1">{video.title}</h4>
                    <p className="text-sm text-on-surface-variant line-clamp-2 italic">
                      "{video.desc}"
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <a 
                href="https://youtube.com/playlist?list=PL8HshxN4KYYnyMQW8wrmMRUWhR_vFTGHm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-secondary-container font-black hover:underline group"
              >
                <span>XEM TẤT CẢ FEEDBACK TRÊN YOUTUBE</span>
                <PlayCircle size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              {/* Visual Seal */}
              <motion.div 
                {...fadeInUp}
                className="lg:w-2/5 flex justify-center"
              >
                <div className="relative w-72 h-72 md:w-96 md:h-96 group">
                  {/* Outer Gold Glow */}
                  <div className="absolute inset-0 bg-yellow-500/20 rounded-full blur-3xl group-hover:bg-yellow-500/30 transition-all duration-700" />
                  
                  {/* The Seal Container */}
                  <div className="absolute inset-0 bg-[#c4161c] rounded-full border-[10px] border-[#f0c419] shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center text-center p-6 text-white overflow-hidden border-double">
                    {/* Inner gold ring */}
                    <div className="absolute inset-2 border-2 border-[#f0c419]/50 rounded-full" />
                    
                    {/* Sunburst Pattern - more rays */}
                    <div className="absolute inset-0 opacity-15 pointer-events-none" 
                         style={{ 
                           backgroundImage: `repeating-conic-gradient(from 0deg, transparent 0deg 2deg, #fff 2deg 4deg)`,
                           maskImage: 'radial-gradient(circle, black 30%, transparent 80%)'
                         }} 
                    />
                    
                    <div className="relative z-10 flex flex-col items-center max-w-[85%]">
                      <div className="flex gap-1 mb-4 drop-shadow-md">
                        {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#f0c419" className="text-[#f0c419]" />)}
                      </div>
                      
                      <div className="space-y-1 mb-2">
                        <p className="text-sm md:text-base font-bold text-[#f0c419] tracking-widest drop-shadow-md">NẾU PHẦN MỀM</p>
                        <p className="text-xl md:text-2xl font-black text-white leading-tight uppercase drop-shadow-lg">
                          KHÔNG GIỐNG MÔ TẢ<br/>
                          <span className="text-[#f0c419]">TRONG 7 NGÀY</span>
                        </p>
                      </div>
                    </div>

                    {/* Arched Ribbon Component */}
                    <div className="absolute bottom-4 left-[-10%] right-[-10%] z-20 flex items-center justify-center">
                      <div className="relative w-full h-16 md:h-20 flex items-center justify-center group/ribbon">
                        {/* Folded pieces behind */}
                        <div className="absolute bottom-2 -left-2 w-12 h-12 bg-[#8b6b06] shadow-lg -z-10 -rotate-[15deg]" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 80%)' }} />
                        <div className="absolute bottom-2 -right-2 w-12 h-12 bg-[#8b6b06] shadow-lg -z-10 rotate-[15deg]" style={{ clipPath: 'polygon(0 0, 100% 80%, 100% 100%, 0 100%)' }} />
                        
                        {/* Main Arched Ribbon Body */}
                        <div className="relative w-full h-full bg-gradient-to-b from-[#fdf1b8] via-[#f0c419] to-[#8b6b06] shadow-[0_10px_20px_rgba(0,0,0,0.4)] flex items-center justify-center border-y-2 border-[#8b6b06]/20 rounded-[50%_50%_15%_15%/20%_20%_10%_10%] px-4">
                           <span className="text-[#6d0000] font-black text-xl md:text-2xl whitespace-nowrap drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] uppercase tracking-tight">
                              CAM KẾT HOÀN TIỀN
                           </span>
                        </div>
                      </div>
                    </div>

                    {/* Radial Flare */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.2)_0%,transparent_60%)]" />
                  </div>
                </div>
              </motion.div>

              {/* Commitment Text */}
              <div className="lg:w-3/5">
                <div className="mb-10">
                  <span className="inline-block px-4 py-1.5 mb-6 text-xs bg-red-50 text-red-600 font-bold rounded-full tracking-widest uppercase border border-red-100">
                    SỨ MỆNH & TRÁCH NHIỆM
                  </span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-primary mb-6 uppercase tracking-tight leading-tight whitespace-normal md:whitespace-nowrap">
                    CAM KẾT "HIỆU QUẢ - NHANH - DỄ DÙNG"
                  </h2>
                </div>
                
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { text: "HỖ TRỢ 1-1 trong quá trình sử dụng phần mềm.", icon: <Headset size={20} /> },
                    { text: "Bảo hành, update phần mềm MIỄN PHÍ trọn đời.", icon: <Zap size={20} /> },
                    { text: "Cam kết refund 100% trong 7 ngày đầu tiên nếu tính năng không giống mô tả.", icon: <ShieldCheck size={20} /> },
                    { text: "Đào tạo, CẦM TAY CHỈ VIỆC đến khi THÀNH THẠO sử dụng công cụ.", icon: <Award size={20} /> },
                    { text: "Đồng hành với khách hàng cho đến khi sử dụng hiệu quả.", icon: <CheckCircle2 size={20} /> },
                    { text: "Hỗ trợ đổi sản phẩm thay thế 1 lần trong tháng đầu tiên sử dụng.", icon: <Zap size={20} /> },
                    { text: "Tư vấn MIỄN PHÍ phát triển hệ thống Marketing bán hàng đa kênh.", icon: <MessageCircle size={20} /> },
                    { text: "Liên tục cải tiến sản phẩm, giúp khách hàng có trải nghiệm tốt nhất.", icon: <Award size={20} /> }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-4 items-start group">
                      <div className="bg-red-50 p-2 rounded-lg text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                        {item.icon}
                      </div>
                      <span className="text-sm md:text-base text-on-surface-variant font-medium leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-6 text-xs bg-secondary-container/10 text-secondary-container font-bold rounded-full tracking-widest uppercase">
                CHỌN GÓI GIẢI PHÁP
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-primary mb-6 uppercase tracking-tight">
                BẢNG GIÁ DỊCH VỤ
              </h2>
              <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
                Đầu tư một lần, bùng nổ doanh số bền vững. Chọn gói phù hợp nhất với quy mô kinh doanh của bạn.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
              {[
                { 
                  name: "GÓI 1 NĂM", 
                  price: "6.000.000", 
                  unit: "VNĐ", 
                  popular: false,
                  features: [
                    "Thời hạn sử dụng: 365 ngày",
                    "Sử dụng trên 1 thiết bị",
                    "Đầy đủ các tính năng",
                    "Cập nhật miễn phí",
                    "Cài lại máy, đổi máy không mất bản quyền",
                    "Support & update trọn đời"
                  ],
                  gifts: [
                    "HỖ TRỢ 1-1 trong quá trình sử dụng phần mềm và cài đặt phần mềm MKT Care",
                    "Bảo hành, update phần mềm MIỄN PHÍ trong quá trình sử dụng",
                    "CẦM TAY CHỈ VIỆC đến khi THÀNH THẠO sử dụng công cụ.",
                    "TƯ VẤN MIỄN PHÍ phát triển hệ thống Marketing bán hàng đa kênh."
                  ]
                },
                { 
                  name: "GÓI 5 NĂM", 
                  price: "14.000.000", 
                  unit: "VNĐ", 
                  popular: true,
                  features: [
                    "Thời hạn sử dụng: 1825 ngày",
                    "Sử dụng trên 1 thiết bị",
                    "Đầy đủ các tính năng",
                    "Cập nhật miễn phí",
                    "Cài lại máy, đổi máy không mất bản quyền",
                    "Support & update trọn đời"
                  ],
                  gifts: [
                    "HỖ TRỢ 1-1 trong quá trình sử dụng phần mềm và cài đặt phần mềm MKT Care",
                    "Bảo hành, update phần mềm MIỄN PHÍ trong quá trình sử dụng",
                    "CẦM TAY CHỈ VIỆC đến khi THÀNH THẠO sử dụng công cụ.",
                    "TƯ VẤN MIỄN PHÍ phát triển hệ thống Marketing bán hàng đa kênh.",
                    "TẶNG bộ tài liệu hơn 69 CÔNG CỤ, Phần mềm Marketing TỐT NHẤT"
                  ]
                },
                { 
                  name: "GÓI 10 NĂM", 
                  price: "24.000.000", 
                  unit: "VNĐ", 
                  popular: false,
                  features: [
                    "Thời hạn sử dụng: 3650 ngày",
                    "Sử dụng trên 1 thiết bị",
                    "Đầy đủ các tính năng",
                    "Cập nhật miễn phí",
                    "Cài lại máy, đổi máy không mất bản quyền",
                    "Support & update trọn đời"
                  ],
                  gifts: [
                    "HỖ TRỢ 1-1 trong quá trình sử dụng phần mềm và cài đặt phần mềm MKT Care",
                    "Bảo hành, update phần mềm MIỄN PHÍ trong quá trình sử dụng",
                    "CẦM TAY CHỈ VIỆC đến khi THÀNH THẠO sử dụng công cụ.",
                    "TƯ VẤN MIỄN PHÍ phát triển hệ thống Marketing bán hàng đa kênh.",
                    "TẶNG bộ tài liệu hơn 69 CÔNG CỤ, Phần mềm Marketing TỐT NHẤT",
                    "TẶNG khóa học Phá băng Niềm tin giới hạn trị giá 2.999.000 VNĐ.",
                    "TẶNG khóa học Coaching Sale - Marketing thực chiến."
                  ]
                }
              ].map((plan, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col p-8 md:p-10 rounded-2xl border-2 transition-all duration-500 hover:shadow-2xl ${
                    plan.popular 
                      ? 'bg-[#fcf9f2] border-[#f0c419] shadow-xl' 
                      : 'bg-[#f5f7fb] border-outline-variant shadow-soft'
                  }`}
                >
                  <div className="text-center mb-8 h-28 flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-primary mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center whitespace-nowrap">
                      <span className="text-3xl md:text-4xl font-black text-primary">{plan.price}</span>
                      <span className="text-xl md:text-2xl font-black text-primary ml-2">{plan.unit}</span>
                    </div>
                  </div>

                  <div className="space-y-1 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex gap-3 items-center py-2 border-b border-dotted border-gray-200 last:border-0 text-sm">
                        <div className="bg-primary/10 rounded-full p-1 text-primary flex-shrink-0">
                          <Check size={14} />
                        </div>
                        <span className="text-on-surface-variant font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mb-10">
                    <button 
                      onClick={() => setIsContactModalOpen(true)}
                      className="w-full py-4 rounded-full bg-secondary-container text-white font-bold text-lg hover:bg-secondary-container/90 transition-all shadow-md"
                    >
                      Mua ngay
                    </button>
                  </div>

                  {/* Gift section - Removed mt-auto to align headers at the top since top content is equal height */}
                  <div className="pt-8 border-t-2 border-gray-100/50">
                    <div className="flex items-center gap-2 mb-6 text-primary">
                      <Gift size={24} />
                      <span className="font-extrabold uppercase tracking-widest text-lg">BỘ QUÀ TẶNG</span>
                    </div>
                    
                    <div className="space-y-4">
                      {plan.gifts.map((gift, gIdx) => (
                        <div key={gIdx} className="flex gap-3 items-start py-2 border-b border-dotted border-gray-200 last:border-0 group">
                          <div className="bg-primary/5 rounded-full p-1 text-primary mt-1 group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                            <Check size={12} />
                          </div>
                          <span className="text-sm text-on-surface-variant font-medium leading-relaxed">{gift}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="contact" className="py-24 bg-surface-container-low">
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
                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                    <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-2">Đăng ký thành công!</h3>
                    <p className="text-on-surface-variant">
                      Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ tư vấn trong 15-30 phút tới.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="mt-8 text-primary font-bold hover:underline"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">HỌ VÀ TÊN <span className="text-red-500">*</span></label>
                        <input 
                          name="full_name"
                          type="text" 
                          required
                          placeholder="Nhập tên của bạn" 
                          className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">SỐ ĐIỆN THOẠI <span className="text-red-500">*</span></label>
                        <input 
                          name="phone"
                          type="tel" 
                          required
                          placeholder="Nhập số điện thoại" 
                          className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">LĨNH VỰC</label>
                        <input 
                          name="industry"
                          type="text" 
                          placeholder="Nhập lĩnh vực kinh doanh" 
                          className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">EMAIL</label>
                        <input 
                          name="email"
                          type="email" 
                          placeholder="Nhập email của bạn" 
                          className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold mb-2 text-primary tracking-widest uppercase">GHI CHÚ NHU CẦU</label>
                      <textarea 
                        name="notes"
                        rows={3} 
                        placeholder="Mô tả qua nhu cầu của bạn..." 
                        className="w-full px-4 py-3.5 rounded-xl border border-outline-variant focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all placeholder:text-gray-300"
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      disabled={formStatus === 'submitting'}
                      className="w-full bg-secondary-container text-white py-5 rounded-xl font-bold text-lg hover:brightness-110 transform transition-transform active:scale-95 shadow-lg shadow-secondary-container/20 uppercase tracking-wide disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {formStatus === 'submitting' ? 'Đang gửi...' : 'ĐĂNG KÝ NHẬN DEMO'}
                    </button>
                    {formStatus === 'error' && (
                      <p className="text-red-500 text-xs text-center font-bold">Đã có lỗi xảy ra. Vui lòng thử lại sau.</p>
                    )}
                  </form>
                )}
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
