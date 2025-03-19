import React from "react";

const page = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Licenses</h1>
      <div className="bg-gray-100 p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-2">Lucide Icon Toolkit</h2>
        <p className="text-sm mb-2">
          The icon used in our logo is sourced from the Lucide icon toolkit,
          licensed under the ISC License:
        </p>
        <pre className="bg-gray-200 p-2 rounded-md text-sm overflow-x-auto">
          <code>
            ISC License{"\n"}
            {"\n"}
            Copyright (c) for portions of Lucide are held by Cole Bemis
            2013-2022 as part of Feather (MIT).{"\n"}
            All other copyright (c) for Lucide are held by Lucide Contributors
            2022.{"\n"}
            {"\n"}
            Permission to use, copy, modify, and/or distribute this software for
            any purpose with or without fee is hereby granted, provided that the
            above copyright notice and this permission notice appear in all
            copies.{"\n"}
            {"\n"}
            THE SOFTWARE IS PROVIDED &quot;AS IS&quot; AND THE AUTHOR DISCLAIMS
            ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED
            WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE
            AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL
            DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA
            OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
            TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
          </code>
        </pre>
        <a
          href="https://lucide.dev/license"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline mt-2 block"
        >
          https://lucide.dev/license
        </a>
      </div>
    </div>
  );
};

export default page;
