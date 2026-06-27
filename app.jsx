// Naylor CC — App entry
// TWEAK_DEFAULTS lives in Landing Page.html so edits persist across refreshes.

function App() {
  const [tweaks, setTweak] = useTweaks(window.TWEAK_DEFAULTS);

  // Apply theme + type to body
  React.useEffect(() => {
    document.body.dataset.theme = tweaks.theme;
    document.body.dataset.type = tweaks.type;
  }, [tweaks.theme, tweaks.type]);

  const Hero =
    tweaks.hero === 'B' ? HeroB :
    tweaks.hero === 'C' ? HeroC :
    HeroA;

  const heroProps = tweaks.hero === 'A'
    ? {
        cropX: tweaks.heroCropX,
        cropY: tweaks.heroCropY,
        pan: tweaks.heroPan,
        panSpeed: tweaks.heroPanSpeed,
      }
    : {};

  return (
    <>
      <TopBar />
      <Nav />
      <Hero {...heroProps} />
      <Strip />
      <Problem />
      <Strip variant="services" />
      <Approach />
      <WhoWeServe />
      <Logos />
      <CTA />
      <Footer />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero variant">
          <TweakRadio
            label="Layout"
            value={tweaks.hero}
            onChange={(v) => setTweak('hero', v)}
            options={[
              { value: 'A', label: 'Editorial split' },
              { value: 'B', label: 'Statement' },
              { value: 'C', label: 'Dossier' },
            ]}
          />
        </TweakSection>
        {tweaks.hero === 'A' && (
          <TweakSection label="Hero image crop">
            <TweakToggle
              label="Slow horizontal pan"
              value={tweaks.heroPan}
              onChange={(v) => setTweak('heroPan', v)}
            />
            {tweaks.heroPan ? (
              <TweakSlider
                label="Pan duration"
                value={tweaks.heroPanSpeed}
                onChange={(v) => setTweak('heroPanSpeed', v)}
                min={10} max={120} step={1} suffix="s"
              />
            ) : (
              <TweakSlider
                label="Horizontal"
                value={tweaks.heroCropX}
                onChange={(v) => setTweak('heroCropX', v)}
                min={0} max={100} step={1} suffix="%"
              />
            )}
            <TweakSlider
              label="Vertical"
              value={tweaks.heroCropY}
              onChange={(v) => setTweak('heroCropY', v)}
              min={0} max={100} step={1} suffix="%"
            />
          </TweakSection>
        )}
        <TweakSection label="Color theme">
          <TweakSelect
            label="Palette"
            value={tweaks.theme}
            onChange={(v) => setTweak('theme', v)}
            options={[
              { value: 'navy-orange', label: 'Navy + Safety Orange (default)' },
              { value: 'charcoal-amber', label: 'Charcoal + Amber' },
              { value: 'forest-cream', label: 'Forest + Cream' },
              { value: 'ink-safety', label: 'Ink + Safety' },
            ]}
          />
        </TweakSection>
        <TweakSection label="Type pairing">
          <TweakSelect
            label="Fonts"
            value={tweaks.type}
            onChange={(v) => setTweak('type', v)}
            options={[
              { value: 'serif-inter', label: 'Source Serif 4 + Inter Tight' },
              { value: 'fraunces-dm', label: 'Fraunces + DM Sans' },
              { value: 'instrument-inter', label: 'Instrument Serif + Inter Tight' },
            ]}
          />
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
