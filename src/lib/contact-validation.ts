export interface ContactData {
    name: string;
    email: string;
    phone: string;
    projectType: string;
    surface: string;
    message: string;
    website?: string;
}

export function validateContact(value: unknown): ContactData | null {
    if (!value || typeof value !== 'object' || Array.isArray(value)) return null;
    const input = value as Record<string, unknown>;
    const fields = ['name', 'email', 'phone', 'projectType', 'surface', 'message'] as const;
    if (fields.some(key => typeof input[key] !== 'string')) return null;
    const data = Object.fromEntries(fields.map(key => [key, (input[key] as string).trim()])) as unknown as ContactData;
    if (data.name.length < 2 || data.name.length > 120 || /[\r\n]/.test(data.name)) return null;
    if (data.email.length > 254 || !/^[^\s@<>"(),;:\\]+@[^\s@<>"(),;:\\]+\.[^\s@<>"(),;:\\]+$/.test(data.email)) return null;
    if (data.phone && (!/^[+\d\s().-]{6,30}$/.test(data.phone) || data.phone.replace(/\D/g, '').length < 6)) return null;
    if (!data.projectType || data.projectType.length > 100 || /[\r\n]/.test(data.projectType)) return null;
    if (!data.surface || !Number.isFinite(Number(data.surface)) || Number(data.surface) <= 0 || Number(data.surface) > 1000000) return null;
    if (data.message.length > 5000) return null;
    if (input.website !== undefined && typeof input.website !== 'string') return null;
    return { ...data, website: typeof input.website === 'string' ? input.website.trim() : '' };
}

export function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!);
}
