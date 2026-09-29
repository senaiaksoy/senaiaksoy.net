# AGENTS.md — senaiaksoy.net

## Obsidian vault / Senai-Wiki erişimi

Obsidian vault, site deposunun alt klasörü değil, **ayrı Git deposudur**. GitHub'da `senai-wiki` / `Senai-Wiki` adıyla ara; `draksoyivf-knowledge` yalnızca bu bilgisayardaki klasör adıdır.

- Depo: [senaiaksoy/Senai-Wiki](https://github.com/senaiaksoy/Senai-Wiki) — varsayılan dal: `main`.
- Clone adresi: `https://github.com/senaiaksoy/Senai-Wiki.git`.
- Yerel checkout: `D:\A-klasör\obsidian-vaults\draksoyivf-knowledge`.
- Kanonik stil rehberi: [`wiki/brand/senai-aksoy-makale-stil-rehberi.md`](https://github.com/senaiaksoy/Senai-Wiki/blob/main/wiki/brand/senai-aksoy-makale-stil-rehberi.md).
- Diğer vault yolları da aynı depo köküne göredir: [`wiki/brand/ecosystem.md`](https://github.com/senaiaksoy/Senai-Wiki/blob/main/wiki/brand/ecosystem.md), [`wiki/operations/stack/00-charter.md`](https://github.com/senaiaksoy/Senai-Wiki/blob/main/wiki/operations/stack/00-charter.md).

Bu dosyadaki ve bootstrap talimatlarındaki vault/preflight yollarında önce yerel checkout'u kullan. Windows yolu yoksa erişilebilir `Senai-Wiki` checkout'unda aynı göreli dosyayı veya yetkili GitHub bağlantısıyla `senaiaksoy/Senai-Wiki` deposundaki güncel `main` dosyasını **tam olarak oku**. Depo özeldir; anonim 404, dosyanın olmadığı anlamına gelmez. GitHub CLI erişimi varsa örnek: `gh api -H 'Accept: application/vnd.github.raw+json' 'repos/senaiaksoy/Senai-Wiki/contents/wiki/brand/senai-aksoy-makale-stil-rehberi.md?ref=main'`.

Bu erişim sırası, aşağıdaki “dosya okunamıyorsa dur” kuralından önce uygulanır. Her iki yolla da kanonik içerik okunamıyorsa engeli ve denenen depo/dosya adresini bildir; bellek, özet veya site içi aynayla preflight'ı geçmiş sayma. Başka ortamda mutlak Windows klasörünün bulunması şart değildir; aynı kanonik dosyanın okunması şarttır.

Bu deponun kapsam ve üretim talimatlarının kaynağı [CLAUDE.md](CLAUDE.md) dosyasıdır; işe başlamadan oku ve uygula.

`humanize` için özellikle [kimlik sitesi kapsamındaki humanize kurallarını](CLAUDE.md#humanize-komutu--kimlik-sitesi-kapsamı) uygula. Varsayılan tüm hedef metinde kapsamlı inceleme/düzenlemedir. Bu site makale/blog yayımlamaz; makale SSS akışı burada yeni tıbbi içerik oluşturmaz.
