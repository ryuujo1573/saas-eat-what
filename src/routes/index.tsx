import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="prose m-10 select-none">
      <h1 class="underline-offset-8 hover:underline">Eat what?</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Eat what",
  meta: [
    {
      name: "description",
      content: "Decide what to eat",
    },
  ],
};
