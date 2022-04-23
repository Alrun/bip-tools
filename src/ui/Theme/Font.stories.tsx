import React from 'react';

export default {
    title: 'Theme/Font'
};

/**
 * Typo
 */
export const Font = () => (
    <>
        <h1>H1. Heading title</h1>
        <p>
            Queen Boadicea is long dead and gone{' '}
            <a href="/" onClick={(e) => e.preventDefault()}>
                Default link
            </a>
            . Still the spirit in her children’s it lives on. If you’ve lost your faith in love of music oh the end
            won’t be long. Because if it’s gone for you then I too may lose it and that would be wrong. You know I’ve
            tried so hard to keep myself from falling back into my bad old and it.
        </p>
        <p>
            Chars my heart to always hear you calling for the good old days. Because there were no good old days. These
            are the good old days. It’s not about, tenements and needles. And all the evils in their eyes and the backs
            of their minds. Daisy chains and school yard games and a list of things we said tomorrow.
        </p>
        <h2>H2. Heading title</h2>
        <p>
            A list of things we said we’d do tomorrow. The Arcadian dream has all fallen through, but the Albion sails
            on course. So man the decks and hoist the rigging because the pig mans found the source. And there’s twelve
            rude boys on the oars.
        </p>
        <h3>H3. Heading title</h3>
        <h4>H4. Heading title</h4>
        <h5>H5. Heading title</h5>
        <h6>H6. Heading title</h6>

        <h3>Unordered list</h3>
        <ul>
            <li>
                Well, I went to the doctors believing the devil had control over me,
                <br />
                and I was finding it hard to breathe, and finding it hard to fight the feeling.
            </li>
            <li>When my heart just burst like a glass balloon.</li>
            <li>
                I let it fly too high and it shattered too soon:
                <ul>
                    <li>I was the wrong damn girl in the wrong damn room;</li>
                    <li>I broke my glass balloon;</li>
                    <li>I let go of my glass balloon;</li>
                </ul>
            </li>
            <li>They call him Hermit the Frog He is looking for a dog</li>
            <li>Did you find your bitch in me?</li>
        </ul>
        <h3>Ordered list</h3>
        <ol>
            <li>
                Well, I went to the doctors believing the devil had control over me,
                <br />
                and I was finding it hard to breathe, and finding it hard to fight the feeling.
            </li>
            <li>When my heart just burst like a glass balloon.</li>
            <li>
                I let it fly too high and it shattered too soon:
                <ol>
                    <li>I was the wrong damn girl in the wrong damn room;</li>
                    <li>I broke my glass balloon;</li>
                    <li>I let go of my glass balloon;</li>
                </ol>
            </li>
            <li>They call him Hermit the Frog He is looking for a dog</li>
            <li>Did you find your bitch in me?</li>
        </ol>
    </>
);
