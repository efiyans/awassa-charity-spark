<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Website architecture
- Keep shared Awassa navigation, donation selection, and footer in a reusable component module so all content pages remain consistent.
- Use dedicated TanStack content routes for informational navigation, with unique metadata on each page.
- Keep donation selection client-side and explicitly disclose unavailable payments until a payment service is connected; never simulate a completed donation.
- Define the brand's semantic palette and layout styles in the global design system so page components remain theme-adherent.
