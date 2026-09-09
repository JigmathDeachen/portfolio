import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Linkedin, Mail, CheckCircle2, Copy, Check } from 'lucide-react';
import { personalInfo } from '../data/personal';
import { HeroBackgroundCarousel } from '../components/HeroBackgroundCarousel';

export const HeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'controller' | 'service' | 'config'>('controller');
  const [copied, setCopied] = useState(false);

  const codeSnippets = {
    controller: `// OrderController.java (Spring Boot 3.x)
@RestController
@RequestMapping("/api/v1/orders")
@RequiredArgsConstructor
public class OrderController {

    private final OrderService orderService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ApiResponse<OrderResponse> placeOrder(
            @Valid @RequestBody OrderRequest request,
            @AuthenticationPrincipal UserPrincipal user) {
        OrderResponse response = orderService.processOrder(request, user.getId());
        return ApiResponse.success("Order processed successfully", response);
    }
}`,
    service: `// OrderService.java (Resilience & Feign)
@Service
@Slf4j
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final ProductClient productClient;
    private final OrderRepository orderRepository;

    @Transactional
    @CircuitBreaker(name = "productService", fallbackMethod = "fallbackOrder")
    public OrderResponse processOrder(OrderRequest req, Long userId) {
        ProductDTO product = productClient.getProduct(req.getProductId());
        Order order = Order.create(userId, product, req.getQuantity());
        return OrderMapper.toResponse(orderRepository.save(order));
    }
}`,
    config: `# application.yml (Spring Cloud Config)
spring:
  application:
    name: order-service
  datasource:
    url: jdbc:mysql://db-primary:3306/orders_db
    hikari:
      maximum-pool-size: 20
eureka:
  client:
    service-url:
      defaultZone: http://eureka-server:8761/eureka/
resilience4j:
  circuitbreaker:
    instances:
      productService:
        slidingWindowSize: 10`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden"
    >
      {/* Dynamic modern software engineering hero background styling */}
      <HeroBackgroundCarousel />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Hero Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Status / Tag badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-2xs hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Engineering Opportunities</span>
              <span className="text-slate-400">•</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">Java Backend</span>
            </div>

            {/* Main Greeting and Role */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                Hi, I'm <span className="text-slate-900 dark:text-white">{personalInfo.name}</span>.
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-blue-600 dark:text-blue-400 tracking-tight">
                {personalInfo.tagline}
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* Short Technology Line */}
            <div className="pt-1">
              <p className="text-xs sm:text-sm font-mono font-medium text-slate-500 dark:text-slate-400">
                {personalInfo.techLine}
              </p>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2">
              <motion.a
                id="hero-experience-btn"
                href="#experience"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                id="hero-projects-btn"
                href="#projects"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-800 dark:text-slate-200 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-300 dark:border-slate-700 transition-colors shadow-2xs focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>View Featured Projects</span>
              </motion.a>
            </div>

            {/* Secondary Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6 pt-3 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-200/80 dark:border-slate-800">
              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                id="hero-email-link"
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1.5 hover:text-rose-600 dark:hover:text-rose-400 transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Email</span>
              </a>
            </div>

          </motion.div>

          {/* Right Hero Code/Architecture Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 text-slate-200 rounded-xl border border-slate-800 shadow-xl overflow-hidden hover:border-slate-700 transition-colors">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-slate-950 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">
                    Java 17 • Spring Boot 3.x
                  </span>
                </div>

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleCopyCode}
                  type="button"
                  className="p-1 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy code"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                </motion.button>
              </div>

              {/* Code File Tabs */}
              <div className="flex items-center border-b border-slate-800 bg-slate-900/90 text-xs font-mono overflow-x-auto">
                <button
                  onClick={() => setActiveTab('controller')}
                  className={`px-3.5 py-2 transition-all cursor-pointer relative ${
                    activeTab === 'controller'
                      ? 'text-white bg-slate-800/60 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  OrderController.java
                  {activeTab === 'controller' && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('service')}
                  className={`px-3.5 py-2 transition-all cursor-pointer relative ${
                    activeTab === 'service'
                      ? 'text-white bg-slate-800/60 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  OrderService.java
                  {activeTab === 'service' && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab('config')}
                  className={`px-3.5 py-2 transition-all cursor-pointer relative ${
                    activeTab === 'config'
                      ? 'text-white bg-slate-800/60 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  application.yml
                  {activeTab === 'config' && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400"
                    />
                  )}
                </button>
              </div>

              {/* Code Viewer */}
              <div className="p-4 overflow-x-auto text-[11px] sm:text-xs font-mono leading-relaxed bg-slate-950/70 max-h-[320px]">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                    className="text-slate-300"
                  >
                    <code>{codeSnippets[activeTab]}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Code Card Footer Highlights */}
              <div className="px-4 py-2.5 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  <span>Clean Architecture</span>
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  Microservices • REST APIs
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
