"use client";

import { useState } from "react";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";

const AMOUNTS = ["10 000", "25 000", "50 000"] as const;
const FUNDS = ["Denier du Culte (Vie des prêtres)", "Projets et travaux de l'église", "Diaconie & Solidarité Saint-Vincent", "Activités pastorales des Jeunes"];

export function DonationForm() {
  const [amount, setAmount] = useState<string>(AMOUNTS[0]);
  const [custom, setCustom] = useState("");
  const [fund, setFund] = useState(FUNDS[0]);
  const isOther = amount === "other";

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: connect payment provider (Mobile Money / card) with { amount: isOther ? custom : amount, fund }
  }

  const choice = (active: boolean) =>
    cn("cursor-pointer rounded-xl border py-3 text-center text-sm transition-all",
      active ? "border-2 border-liturgical-gold bg-gold-subtle/50 font-bold text-tertiary"
             : "border-border-delicate bg-white font-semibold text-on-surface hover:border-liturgical-gold");

  return (
    <form onSubmit={onSubmit} className="rounded-xl border border-border-delicate bg-warm-ivory p-6 md:p-8">
      <h3 className="mb-4 text-center text-title-md text-primary">Faire une offrande en ligne</h3>

      <div role="radiogroup" aria-label="Montant du don" className="mb-4 grid grid-cols-2 gap-3">
        {AMOUNTS.map((a) => (
          <button key={a} type="button" role="radio" aria-checked={amount === a} onClick={() => setAmount(a)} className={choice(amount === a)}>
            {a} FCFA
          </button>
        ))}
        <button type="button" role="radio" aria-checked={isOther} onClick={() => setAmount("other")} className={choice(isOther)}>
          Autre montant
        </button>
      </div>

      {isOther && (
        <div className="mb-4 space-y-1">
          <Label htmlFor="custom-amount" className="text-body-sm text-on-surface-variant">Montant (FCFA)</Label>
          <Input id="custom-amount" inputMode="numeric" value={custom} onChange={(e) => setCustom(e.target.value.replace(/\D/g, ""))}
            placeholder="ex. 15000" className="h-11 rounded-xl bg-white" required />
        </div>
      )}

      <div className="space-y-1">
        <Label htmlFor="fund" className="text-body-sm text-on-surface-variant">Affectation du don</Label>
        <Select value={fund} onValueChange={(val) => val && setFund(val)}>
          <SelectTrigger id="fund" className="h-11 w-full rounded-xl bg-white"><SelectValue /></SelectTrigger>
          <SelectContent>{FUNDS.map((f) => <SelectItem key={f} value={f}>{f}</SelectItem>)}</SelectContent>
        </Select>
      </div>

      <Button type="submit" variant="gold" size="xl" className="mt-6 w-full tracking-wider">
        <Lock aria-hidden /> Valider mon don en ligne
      </Button>
      <p className="mt-3 text-center text-xs text-on-surface-variant">Reçu fiscal et accusé de réception automatique.</p>
    </form>
  );
}