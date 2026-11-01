import { Footer } from "@/components/layout/Footer";
import { Icon } from "@/components/ui/Icon";
import { Note } from "@/components/ui/Note";
import { DOCS } from "./docs";

/** 이용약관·개인정보 취급 방침(초안). 목차는 같은 화면의 조항으로 이동한다 */
export function LegalDocument({ kind }: { kind: "terms" | "privacy" }) {
  const d = DOCS[kind];
  return (
    <>
      <div className="page-wrap">
        <div
          className="grid grid-cols-[220px_minmax(0,720px)] gap-12 pt-8 @max-[860px]/app:grid-cols-1 @max-[860px]/app:gap-6"
          data-component="doc"
        >
          <nav
            className="sticky top-[88px] flex flex-col gap-0.5 self-start text-13 @max-[860px]/app:static @max-[860px]/app:flex-row @max-[860px]/app:flex-wrap"
            aria-label="조항 목차"
          >
            {d.sections.map(([t], i) => (
              <a
                key={t}
                href={`#${kind}-s${i + 1}`}
                className="rounded-sm px-2.5 py-1.5 text-text-3 hover:bg-light hover:text-ink"
              >
                제{i + 1}조 {t}
              </a>
            ))}
          </nav>
          <article>
            <h1 className="m-0 flex flex-wrap items-center gap-2.5 text-28 font-extrabold tracking-[-0.02em]">
              {d.title}{" "}
              <span className="inline-flex h-[22px] items-center rounded-sm bg-status-temp-bg px-2 text-[11.5px] font-bold tracking-[-0.01em] whitespace-nowrap text-status-temp-fg">
                초안(임시)
              </span>
            </h1>
            <div className="mt-3 flex flex-wrap gap-4 text-13 text-muted">
              <span>시행일: 정식 오픈 시 기재</span>
              <span>버전: 초안</span>
            </div>
            <Note tone="butter" className="mt-5">
              <Icon name="info" size={16} />
              법적 검토 전의 초안입니다. 최종 문구는 정식 오픈 전에 확정됩니다.
            </Note>
            {d.sections.map(([t, body], i) => (
              <section
                key={t}
                id={`${kind}-s${i + 1}`}
                className="scroll-mt-20"
              >
                <h2 className="mt-8 mb-2 text-16 font-extrabold">
                  제{i + 1}조 ({t})
                </h2>
                <p className="m-0 text-15 leading-[1.75] text-[#3a3a3a]">
                  {body}
                </p>
              </section>
            ))}
          </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
