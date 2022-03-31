import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const TypographyExample = () => (
    <Box>
        <Stack spacing={4} sx={{ mb: 8 }}>
            <Typography variant="h1">
                H1 Desktop – heading title
                <br />
                (36px/42px)
            </Typography>
            <Typography variant="h2">
                H2 Desktop – heading title
                <br />
                (28px/34px)
            </Typography>
            <Typography variant="h3">
                H3 Desktop – heading title
                <br />
                (24px/29px)
            </Typography>
            <Typography variant="h4">
                H4 Desktop – heading title
                <br />
                (18px/24px Typography)
            </Typography>
            <Typography variant="h5">
                H5 Desktop – heading title
                <br />
                (16px/20px)
            </Typography>
            <Typography variant="h6">
                H6 Desktop – heading title
                <br />
                (14px/18px)
            </Typography>
            <Typography gutterBottom>
                body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit,
                quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat
                deleniti? Eum quasi quidem quibusdam.
            </Typography>
            <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
                <Box>
                    <Typography variant="smThin" component="div" gutterBottom>
                        smThin
                    </Typography>
                    <Typography variant="xsThin" component="div" gutterBottom>
                        xsThin
                    </Typography>
                    <Typography variant="xxsThin" component="div" gutterBottom>
                        xxsThin
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="smRegular" component="div" gutterBottom>
                        smRegular
                    </Typography>
                    <Typography variant="xsRegular" component="div" gutterBottom>
                        xsRegular
                    </Typography>
                    <Typography variant="xxsRegular" component="div" gutterBottom>
                        xxsRegular
                    </Typography>
                </Box>
                <Box>
                    <Typography variant="smBold" component="div" gutterBottom>
                        smBold
                    </Typography>
                    <Typography variant="xsBold" component="div" gutterBottom>
                        xsBold
                    </Typography>
                    <Typography variant="xxsBold" component="div" gutterBottom>
                        xxsBold
                    </Typography>
                </Box>
            </Stack>
            <Typography color="primary" component="div" gutterBottom>
                Text Primary
            </Typography>
            <Typography color="secondary" component="div" gutterBottom>
                Text Secondary
            </Typography>
            <Typography color="success.main" component="div" gutterBottom>
                Text Success
            </Typography>
            <Typography color="error.main" component="div" gutterBottom>
                Text Error
            </Typography>
            <Typography color="info.main" component="div" gutterBottom>
                Text Info
            </Typography>
            <Typography color="warning.main" component="div" gutterBottom>
                Text Warning
            </Typography>
            <Typography color="text.disabled" component="div" gutterBottom>
                Text Disabled
            </Typography>
        </Stack>

        <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom>
                Unordered list
            </Typography>
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
        </Box>

        <Box sx={{ mb: 8 }}>
            <Typography variant="h3" gutterBottom>
                Ordered list
            </Typography>
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
        </Box>
    </Box>
);

export default TypographyExample;
