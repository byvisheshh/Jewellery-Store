import React from "react";
import { BlogArticle, BLOG_ARTICLES } from "../data/blogs";
import { STORE_CONFIG } from "../data/storeConfig";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Breadcrumbs } from "../components/Breadcrumbs";
import { Link } from "../components/Link";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  MessageCircle, 
  Sparkles, 
  ArrowRight,
  BookOpen
} from "lucide-react";

interface BlogPostPageProps {
  article: BlogArticle;
  onBack: () => void;
  onSelectArticle: (article: BlogArticle) => void;
  onOpenAppointment: () => void;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({
  article,
  onBack,
  onSelectArticle,
  onOpenAppointment,
}) => {
  const relatedArticles = BLOG_ARTICLES.filter((a) =>
    article.relatedArticleSlugs.includes(a.slug)
  );

  const shareUrl = typeof window !== "undefined" ? window.location.href : `${STORE_CONFIG.canonicalDomain}/blog/${article.slug}`;
  const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(
    `Read "${article.title}" by ${STORE_CONFIG.storeName}: ${shareUrl}`
  )}`;

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Journal", url: "/blog" },
    { name: article.title, url: `/blog/${article.slug}` },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10">
      {/* Crawlable Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Back to Journal Link */}
      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8F7040] hover:text-[#1E1B18] font-semibold transition-colors"
          title="Return to Nilam Jewellers Journal"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Articles</span>
        </Link>
      </div>

      {/* Article Header & Metadata */}
      <header className="space-y-6 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-xs text-[#8E877D] tracking-wider uppercase font-medium">
          <span className="text-[#8F7040] font-semibold">{article.category}</span>
          <span aria-hidden="true">·</span>
          <span>{article.date}</span>
          <span aria-hidden="true">·</span>
          <span>{article.readingTime}</span>
        </div>

        <h1 className="font-serif text-3xl sm:text-5xl text-[#1E1B18] font-normal leading-tight text-balance">
          {article.title}
        </h1>

        <p className="text-sm sm:text-base text-[#666057] leading-relaxed font-light italic">
          {article.excerpt}
        </p>

        {/* Author Bio Header */}
        <div className="pt-2 flex items-center justify-center gap-3 text-xs text-[#45403A]">
          <div className="w-8 h-8 rounded-full bg-[#EAE0CE] flex items-center justify-center font-serif font-bold text-[#705530]">
            {article.author.name.charAt(0)}
          </div>
          <div className="text-left">
            <span className="font-medium text-[#1E1B18] block">{article.author.name}</span>
            <span className="text-[11px] text-[#8E877D]">{article.author.role}</span>
          </div>
        </div>
      </header>

      {/* Featured Real Photography Banner */}
      <div className="aspect-[16/9] bg-[#FAF8F5] border border-[#E8E2D8] overflow-hidden shadow-lg">
        <ImageWithFallback
          src={article.featuredImage}
          alt={article.featuredImageAlt || article.title}
          aspectRatio="aspect-[16/9]"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Body Content */}
      <div className="space-y-8 text-sm sm:text-base text-[#2C2824] leading-relaxed font-light">
        {/* Lead Introduction */}
        <p className="text-base sm:text-lg text-[#1E1B18] font-normal leading-relaxed border-l-2 border-[#AA8B56] pl-4 italic">
          {article.content.introduction}
        </p>

        {/* Content Sections */}
        {article.content.sections.map((section, idx) => (
          <section key={idx} className="space-y-4 pt-4">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#1E1B18] font-normal">
              {section.heading}
            </h2>

            {section.subheading && (
              <h3 className="font-serif text-lg text-[#705530] font-medium">
                {section.subheading}
              </h3>
            )}

            {section.body.map((para, pIdx) => (
              <p key={pIdx} className="leading-relaxed">
                {para}
              </p>
            ))}

            {section.bulletPoints && section.bulletPoints.length > 0 && (
              <div className="bg-[#FAF8F5] border border-[#E8E2D8] p-5 my-4">
                <span className="text-xs uppercase tracking-wider text-[#8F7040] font-semibold block mb-2">
                  Key Recommendations:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-[#45403A]">
                  {section.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-start gap-2">
                      <span className="text-[#AA8B56] font-bold">▪</span>
                      <span>{bp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Contextual Internal Link with Meaningful Anchor Text */}
            {section.internalLink && (
              <div className="my-4 p-4 bg-[#F4EFE6]/70 border-l-2 border-[#AA8B56] flex items-center justify-between gap-4">
                <span className="text-xs text-[#666057]">
                  <strong className="text-[#1E1B18] font-medium mr-1.5">{section.internalLink.contextKicker}:</strong>
                  <Link
                    to={section.internalLink.url}
                    className="text-[#8F7040] hover:text-[#1E1B18] underline font-medium transition-colors"
                    title={section.internalLink.text}
                  >
                    {section.internalLink.text}
                  </Link>
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#AA8B56] shrink-0" />
              </div>
            )}
          </section>
        ))}

        {/* Conclusion */}
        <section className="pt-6 border-t border-[#E8E2D8] space-y-3">
          <h2 className="font-serif text-2xl text-[#1E1B18]">
            Final Reflections
          </h2>
          <p className="leading-relaxed">
            {article.content.conclusion}
          </p>
        </section>

        {/* Keywords metadata block */}
        <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-[#8E877D]">
          <span className="font-medium text-[#45403A]">Topic Keywords:</span>
          {article.keywords.map((kw, i) => (
            <span key={i} className="bg-white border border-[#E8E2D8] px-2 py-0.5 text-[11px]">
              {kw}
            </span>
          ))}
        </div>

        {/* Related Collection Internal Link Banner */}
        {article.relatedCollection && (
          <div className="my-8 p-6 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-[#8F7040] font-semibold block">
                Recommended Collection
              </span>
              <h4 className="font-serif text-lg text-[#1E1B18]">
                {article.relatedCollection.title}
              </h4>
              <p className="text-xs text-[#666057]">
                Explore BIS hallmarked creations related to this topic.
              </p>
            </div>
            <Link
              to={article.relatedCollection.url}
              className="px-5 py-2.5 bg-[#1E1B18] hover:bg-[#8F7040] text-white text-xs uppercase tracking-wider font-semibold transition-colors shrink-0 inline-flex items-center gap-2"
              title={article.relatedCollection.anchorText}
            >
              <span>{article.relatedCollection.anchorText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        )}

        {/* Social Share Bar */}
        <div className="p-4 bg-white border border-[#E8E2D8] flex flex-wrap items-center justify-between gap-4">
          <span className="text-xs font-semibold text-[#1E1B18] uppercase tracking-wider">
            Share this Guide
          </span>
          <div className="flex items-center gap-3">
            <a
              href={whatsappShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#1EBE5D] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Share on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Store CTA Block */}
        <div className="bg-[#F4EFE6] border border-[#D8C6A5] p-8 sm:p-10 space-y-4 text-center my-8 shadow-sm">
          <div className="w-10 h-10 rounded-full bg-white border border-[#AA8B56] flex items-center justify-center mx-auto text-[#8F7040]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-serif text-2xl text-[#1E1B18]">
            {article.content.storeCTA.headline}
          </h3>
          <p className="text-xs sm:text-sm text-[#666057] max-w-lg mx-auto leading-relaxed">
            {article.content.storeCTA.text}
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to={article.content.storeCTA.url || "/collections"}
              className="w-full sm:w-auto px-8 py-3 bg-[#1E1B18] hover:bg-[#382917] text-white text-xs uppercase tracking-widest font-semibold transition-colors inline-block"
              title={article.content.storeCTA.buttonText}
            >
              {article.content.storeCTA.buttonText}
            </Link>
            <button
              onClick={onOpenAppointment}
              className="w-full sm:w-auto px-6 py-3 bg-transparent hover:bg-white/40 border border-[#AA8B56] text-[#1E1B18] text-xs uppercase tracking-widest font-semibold transition-colors cursor-pointer"
            >
              Book Salon Appointment
            </button>
          </div>
        </div>
      </div>

      {/* Related Articles Section with Crawlable Anchor Links */}
      {relatedArticles.length > 0 && (
        <section className="pt-12 border-t border-[#E8E2D8] space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider text-[#8F7040] font-semibold block">
              Continue Reading
            </span>
            <h3 className="font-serif text-2xl text-[#1E1B18]">
              Related Connoisseur Guides
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <article
                key={rel.id}
                className="p-6 bg-white border border-[#E8E2D8] hover:border-[#AA8B56] transition-all group flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#8E877D] uppercase tracking-wider">
                    <span className="text-[#8F7040] font-semibold">{rel.category}</span>
                    <span>{rel.readingTime}</span>
                  </div>
                  <h4 className="font-serif text-lg text-[#1E1B18] group-hover:text-[#8F7040] transition-colors leading-snug">
                    <Link to={`/blog/${rel.slug}`} title={rel.title}>
                      {rel.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#666057] line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-[#F4EFE6] mt-4">
                  <span className="text-[11px] text-[#8E877D]">{rel.author.name}</span>
                  <Link
                    to={`/blog/${rel.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-[#AA8B56] font-medium group-hover:translate-x-1 transition-transform"
                    title={`Read guide: ${rel.title}`}
                  >
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
    </article>
  );
};
